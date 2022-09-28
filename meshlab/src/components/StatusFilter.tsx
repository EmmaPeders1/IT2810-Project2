import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function StatusFilter() {
  const [status, setStatus] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl id="formControl">
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          {/*These needs to change based on the users that are incolved in the project*/}
          <MenuItem value={status}>All</MenuItem>
          <MenuItem value={status}>Open</MenuItem>
          <MenuItem value={status}>Closed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
