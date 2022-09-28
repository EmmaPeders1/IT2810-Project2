import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, selectedGridRowsCountSelector } from '@mui/x-data-grid';
import userEvent from '@testing-library/user-event';

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

    const [data, setData] = useState<UData[]>([]);
    const getData = () => {
        fetch('https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/users'
        //'https://gitlab.stud.idi.ntnu.no/api/v4/projects/17628/members/all/{id} to get one of the members'
            , {
                headers: {
                    "PRIVATE-TOKEN": "glpat-Fy8Cs4SqsPRrBa6MirZy", // our projects access token
                    'Content-Type': 'application/json',
                    'Accept': 'appliaction/json'
                }
            }
        )
            .then(function (response) {
                return response.json() as unknown as UData[];
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])

  return (
    <Box sx={{ height: 400, width: '100%'}}>
    <DataGrid
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
        width: 150,
      },]}
      getRowId={(row) => row.id}
      pageSize={data.length}
      rowsPerPageOptions={[data.length]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>
  );
}

export { UserFetcher }