import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './UserFilter.css'

export default function UserFilter() {
  const [user, setUser] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl id="formControl">
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user}
          label="User"
          onChange={handleChange}
        >
          {/*These needs to change based on the users that are incolved in the project*/}
          <MenuItem value={user}>User 1</MenuItem>
          <MenuItem value={user}>User 2</MenuItem>
          <MenuItem value={user}>User 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
