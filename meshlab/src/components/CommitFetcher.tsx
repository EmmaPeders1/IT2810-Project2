import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { parseURL } from './../Utils';
import { ProjectContext } from '../context/ProjectContext';

// glpat-VVibRbJ7pSfHKcYLnU5S   gitlab AC OLD NOT WORKING
// glpat-Fy8Cs4SqsPRrBa6MirZy new one with role = developer

type CData = {
  author_name: string,
  committed_date: string,
  id: string,
  message: string,
}

function CommitFetcher() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<CData[]>([]);

  const projectInfo = useContext(ProjectContext);

  useEffect(() => {
    const [baseURL, path] = parseURL(projectInfo.url);
    const url = baseURL + "/api/v4/projects/" + path + "/repository/commits";
    fetch(url
      , {
        headers: {
          "PRIVATE-TOKEN": projectInfo.token, // our projects access token
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
          const response = result as unknown as CData[];
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
    return <p className="error-message"> Something went wrong with fetching the data. Are you sure there are no spelling mistakes in your url, and you have the correct accesses? (make sure you're using the correct access token)</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>

  } else {
    return (
      <Box sx={{ height: 450, width: "90%", margin: "0 auto 3rem auto" }}>
        <DataGrid
          getRowHeight={() => 'auto'}
          getEstimatedRowHeight={() => 200}
          density="comfortable"
          sx={{borderColor: "black", textAlign: "left", backgroundColor: "whitesmoke"}}
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
              width: 350,
            },
            {
              field: 'author_name',
              headerName: 'Author',
              width: 200,
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