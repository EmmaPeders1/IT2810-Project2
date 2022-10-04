import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { parseURL } from './../Utils';
import { ProjectContext } from '../context/ProjectContext';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


type UData = {
  id: number,
  username: string,
  name: string,
  state: string,
  avatar_url: string,
  web_url: string
}

function UserFetcher() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<UData[]>([]);

  const projectInfo = useContext(ProjectContext);

  // Reruns when prop (url) changes, yet not reflected inUI unless user switches what to dispplay and back again 
  
  useEffect(() => {
    const [baseURL, path] = parseURL(projectInfo.url);
    const url = baseURL + "/api/v4/projects/" + path + "/members/all";
    fetch(url
      , {
        headers: {
          "PRIVATE-TOKEN": projectInfo.token, 
          'Content-Type': 'application/json',
          'Accept': 'appliaction/json'
        }
      }
    )
      .then(function (res): Response {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res
      })
      .then(res => res.json())
      .then(
        (result: Promise<any>) => {
          setIsLoaded(true);
          const response = result as unknown as UData[];
          setData(response);
        }
      )
      .catch(
        (err) => {
          setIsLoaded(true);
          console.log(err);
          setError(err);
        }
      )

  }, [])

  let number = data.length;

  //return JSX: if there was an error: tell the user, otherwise return the data

  if (error) {
    return <p className="error-message"> Something went wrong with fetching the data. Are you sure there are no spelling mistakes in your url, and you have the correct accesses? (make sure you're using the correct access token)</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>

  } else {
    return (

      <Box sx={{ height: 450, width: "90%", margin: "0 auto 7rem auto" }}>

        <Card sx={{ width: 275, fontColor: "black", margin: "0 auto 0 auto", marginBottom: "10px", fontSize: "18px" }}>
          <Typography sx={{ fontSize: 40 }} color="text.secondary" > {number} users</Typography>
        </Card>

        <DataGrid sx={{ borderColor: "black", color: "black", backgroundColor: "whitesmoke" }}
          rows={data.map((user: UData) => (
            { id: user.id, username: user.username, fullName: user.name }
          ))}
          columns={[{ field: 'id', headerName: 'ID', width: 90 },
          {
            field: 'username',
            headerName: 'Username',
            width: 150,
          },
          {
            field: 'fullName',
            headerName: 'Full name',
            width: 300,
          },]}
          getRowId={(row) => row.id}
          pageSize={data.length}
          rowsPerPageOptions={[data.length]}
          experimentalFeatures={{ newEditingApi: true }}
        />

      </Box>
    );
  }
}

export { UserFetcher }