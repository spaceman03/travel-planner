import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="budget"
      options={budget}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Budget" />}
    />
  );
}

const budget = [
  'Economy',
  'Normal',
  'Luxury'
];