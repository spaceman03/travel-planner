import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function LocationButton({ onSelect }) {
    const handleLocationChange = (event, value) => {
      onSelect(value);
    };

  return (
    <Autocomplete
      disablePortal
      id="countries"
      options={countries}
      onChange={handleLocationChange}
      sx={{ width: 420 }}
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