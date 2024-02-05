import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="countries"
      options={countries}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Countries" />}
    />
  );
}

const countries = [
  'Singapore',
  'Malaysia',
  'Korea',
  'Japan',
  'Thailand',
  'Vietnam',
  'Indonesia',
  'Philippines',
  'India',
  'Taiwan',
  'Hong Kong',
  'China'
];