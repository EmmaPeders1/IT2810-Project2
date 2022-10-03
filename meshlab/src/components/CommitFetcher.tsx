import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { parseURL } from './../Utils';

// glpat-VVibRbJ7pSfHKcYLnU5S   gitlab AC OLD NOT WORKING
// glpat-Fy8Cs4SqsPRrBa6MirZy new one with role = developer

type CData = {
  author_name: string,
  committed_date: string,
  id: string,
  message: string,
}

function CommitFetcher(props: { url: string, token: string }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<CData[]>([]);

  useEffect(() => {
    const [baseURL, path] = parseURL(props.url);
    const url = baseURL + "/api/v4/projects/" + path + "/repository/commits";
    fetch(url
      , {
        headers: {
          "PRIVATE-TOKEN": props.token, // our projects access token
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
          console.log(result)
          const response = result as unknown as CData[];
          console.log(response);
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

  //return JSX: if there was an error: tell the user, otherwise return the data
  if (error) {
    return <p> Something went wrong with fetching the data. Are you sure there are no spelling mistakes in your url, and you have the correct accesses? (make sure you're using the correct access token)</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>

  } else {
    return (
      <Box sx={{ height: 400, width: '90%', margin: "0 auto 0 auto" }}>
        <DataGrid sx={{borderColor: "black", color:"black"}} 
          rows={data.map((commit: CData) => (
            { author_name: commit.author_name, committed_date: commit.committed_date.substring(0, 10), id: commit.id, message: commit.message }
          ))}
          columns={[
            {
              field: 'committed_date',
              headerName: 'Date',
              width: 100,
            },
            {
              field: 'message',
              headerName: 'Message',
              width: 650,
            },
            {
              field: 'author_name',
              headerName: 'Author',
              width: 300,
            },
            {
              field: 'id',
              headerName: 'ID',
              width: 200
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

export { CommitFetcher }