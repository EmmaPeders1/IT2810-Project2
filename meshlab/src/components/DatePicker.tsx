import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function NativePickers() {
  return (
    <TextField
      id="date"
      label="Start date"
      type="date"
      defaultValue="2022-10-01"
      sx={{ width: 220 }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}