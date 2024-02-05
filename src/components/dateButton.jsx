import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({ onSelect }) {
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());

  const handleStartDateChange = (newStartDate) => {
    if (newStartDate.isAfter(endDate)) {
        setEndDate(newStartDate);
      }
      setStartDate(newStartDate);
      onSelect(newStartDate, endDate);
   };

  const handleEndDateChange = (newEndDate) => {
    if (newEndDate.isBefore(startDate)) {
      setEndDate(startDate);
    } else {
      setEndDate(newEndDate);
    }
    onSelect(startDate, newEndDate);
  };

  useEffect(() => {
    onSelect(startDate, endDate);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          sx={{ width: {xs:420, lg: 202} }}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
          minDate={startDate}
          sx={{ width: {xs:420, lg: 202} }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
