import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { parseURL } from './../Utils';
import { ProjectContext } from '../context/ProjectContext';


// glpat-VVibRbJ7pSfHKcYLnU5S   gitlab AC OLD NOT WORKING
// glpat-Fy8Cs4SqsPRrBa6MirZy new one with role = developer

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

  //reruns when prop (url) changes, yet not reflected inUI unless user switches what to dispplay and back again
  useEffect(() => {
    const [baseURL, path] = parseURL(projectInfo.url);
    const url = baseURL + "/api/v4/projects/" + path + "/members/all";
    fetch(url
      //'https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/members/all/{id} to get one of the members'
      // https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-17/project2, use /it2810-h22/Team-17/project2 instead of prject id. (/ represented as %2F)
      , {
        headers: {
          "PRIVATE-TOKEN": projectInfo.token, // our projects access token is glpat-Fy8Cs4SqsPRrBa6MirZy
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

    const styles = (theme: string) => ({
      root: {
        width: "100%",
        overflowX: "auto"
      },
      table: {
        minWidth: 700
      },
      tableRow: {
        "&.Mui-selected, &.Mui-selected:hover": {
          backgroundColor: "purple",
          "& > .MuiTableCell-root": {
            color: "yellow"
          }
        }
      }
    });

    //return JSX: if there was an error: tell the user, otherwise return the data
    if (error) {
        return <p className="error-message"> Something went wrong with fetching the data. Are you sure there are no spelling mistakes in your url, and you have the correct accesses? (make sure you're using the correct access token)</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>

  } else {
    return (
      <Box sx={{ height: 400, width: '90%', margin: "0 auto 3rem auto" }}>
      <DataGrid sx={{borderColor: "black", color:"black"}}
        rows={data.map((user: UData) => (
          { id: user.id, username: user.username, fullName: user.name}
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