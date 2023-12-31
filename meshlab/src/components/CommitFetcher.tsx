import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { parseURL } from './../Utils';
import { ProjectContext } from '../context/ProjectContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
ChartJS.register(ArcElement, Tooltip, Legend);

type CData = {
  author_name: string,
  committed_date: string,
  id: string,
  message: string,
}

type chartData =  {
  labels: string[],
  datasets: {
      label: string,
      data: number[],
      backgroundColor: string[],
      hoverOffset: number,
  }[]
}

function CommitFetcher() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<CData[]>([]);
  const [chartData, setChartData] = useState<chartData>();

  const projectInfo = useContext(ProjectContext);

  useEffect(() => {
    const [baseURL, path] = parseURL(projectInfo.url);
    const url = baseURL + "/api/v4/projects/" + path + "/repository/commits";
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
          const response = result as unknown as CData[];
          setData(response);

          const commiters = response.map(commit => commit.author_name)
          const uniqueCommiters = commiters.filter((item: string, index: number) => commiters.indexOf(item) == index );
          
          let commitCounts: { [key: string]: number; } = {}; 
  
          for (const name of uniqueCommiters) { commitCounts[name] = 0 }
          for (const name of commiters) { commitCounts[name]++ }

          setChartData({
            labels: uniqueCommiters,
            datasets: [
              {
                data: Object.values(commitCounts),
                label: 'Commiters',
                backgroundColor: ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"],
                hoverOffset: 10
              }
            ]
          })
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
    <div className="commitDataContainer">
      <div className="chartDiv">
          { chartData && <Doughnut data={chartData} /> }
      </div>
      <div className="dataGridBox">
        <Box sx={{ height: 450, width: "auto"}}>
          <Card sx={{ width: 275, fontColor: "black", margin: "0 auto 0 auto", marginBottom: "10px", fontSize: "18px" }}>
            <Typography sx={{ fontSize: 40 }} color="text.secondary" > {number} commits</Typography>
          </Card>

          <DataGrid
            getRowHeight={() => 'auto'}
            getEstimatedRowHeight={() => 200}
            density="comfortable"
            sx={{ borderColor: "black", textAlign: "left", backgroundColor: "whitesmoke" }}
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
       </div>
      </div>
    );
  }
}

export { CommitFetcher }