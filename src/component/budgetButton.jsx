import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function BudgetButton({ onSelect }) {
    const handleBudgetChange = (event, value) => {
      onSelect(value);
    };

  return (
    <Autocomplete
      disablePortal
      id="budget"
      options={budget}
      onChange={handleBudgetChange}
      sx={{ width: 420 }}
      renderInput={(params) => <TextField {...params} label="Budget" />}
    />
  );
}

const budget = [
  'Economy',
  'Normal',
  'Luxury'
];