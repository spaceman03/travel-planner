import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function PurposeButton({ onSelect }) {
    const handlePurposeChange = (event, value) => {
      onSelect(value);
    };

  return (
    <Autocomplete
      disablePortal
      id="purpose"
      options={purpose}
      onChange={handlePurposeChange}
      sx={{ width: 420 }}
      renderInput={(params) => <TextField {...params} label="Purpose of Trip" />}
    />
  );
}

const purpose = [
  'Tourism',
  'Education',
  'Pilgrimage'
];