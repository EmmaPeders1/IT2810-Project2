import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function NativePickers() {
  return (
    <TextField
      id="date"
      type="date"
      sx={{ width: 155 }}
      //TODO: not have both labels be "Date"
      label="Date"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}