import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { parseURL } from './../Utils';
import { useSlotProps } from '@mui/base';
import { ProjectContext } from '../context/ProjectContext';

// glpat-VVibRbJ7pSfHKcYLnU5S   gitlab AC OLD NOT WORKING
// glpat-Fy8Cs4SqsPRrBa6MirZy new one with role = developer

type IData = {
    author: { name: string }
    assignees: { name: string }[]
    created_at: string,
    iid: string,
    title: string,
    labels: string[];
}

function IssueFetcher() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState<IData[]>([]);

    const projectInfo = useContext(ProjectContext);

    useEffect(() => {
        const [baseURL, path] = parseURL(projectInfo.url);
        const url = baseURL + "/api/v4/projects/" + path + "/issues";
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
                    console.log(result)
                    const response = result as unknown as IData[];
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
            <Box sx={{ height: 450, width: '90%', margin: "0 auto 3rem auto" }}>
                <DataGrid sx={{borderColor: "black", color:"black", backgroundColor: "whitesmoke"}}
                    rows={data.map((issue: IData) => (
                        { author_name: issue.author.name, assignees: issue.assignees.map((assignee) => (assignee.name)), created_date: issue.created_at.substring(0, 10), labels: issue.labels, iid: issue.iid, title: issue.title }
                    ))}
                    columns={[
                        {
                            field: 'created_date',
                            headerName: 'Date',
                            width: 100,
                        },
                        {
                            field: 'title',
                            headerName: 'Title',
                            width: 400,
                        },
                        {
                            field: 'author_name',
                            headerName: 'Author',
                            width: 300,
                        },
                        {
                            field: 'assignees',
                            headerName: 'Assignees',
                            width: 300,
                        },
                        {
                            field: 'labels',
                            headerName: "Labels",
                            width: 300,
                        },
                        {
                            field: 'iid',
                            headerName: 'ID',
                            width: 50
                        },]}
                    getRowId={(row) => row.iid}
                    pageSize={data.length}
                    rowsPerPageOptions={[data.length]}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        );
    }
}

export { IssueFetcher }