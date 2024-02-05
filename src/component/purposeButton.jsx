import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="purpose"
      options={purpose}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Purpose of Trip" />}
    />
  );
}

const purpose = [
  'Tourism',
  'Education',
  'Pilgrimage'
];