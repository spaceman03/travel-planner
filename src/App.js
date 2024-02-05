import React, { useState } from 'react';
import './App.css';

import LocationButton from './components/locationButton.jsx';
import DateButton from './components/dateButton.jsx';
import BudgetButton from './components/budgetButton.jsx';
import PurposeButton from './components/purposeButton.jsx';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedPurpose, setSelectedPurpose] = useState(null);

  const handleLetsGoClick = () => {
    // Log or use the start and end dates as needed
    console.log('Selected Location:', selectedLocation);
    console.log('Selected Start Date:', selectedStartDate.format('DD-MM-YYYY'));
    console.log('Selected End Date:', selectedEndDate.format('DD-MM-YYYY'));
    console.log('Selected Budget:', selectedBudget);
    console.log('Selected Purpose:', selectedPurpose);
  };

  return (
    <div className="App">
      <p>Curate Your Holiday</p>
      <LocationButton onSelect={setSelectedLocation} />
      <DateButton onSelect={(startDate, endDate) => { 
        setSelectedStartDate(startDate);
        setSelectedEndDate(endDate);
      }} />
      <BudgetButton onSelect={setSelectedBudget} />
      <PurposeButton onSelect={setSelectedPurpose} />
      <button onClick={() => handleLetsGoClick()} className="App-button">Let's Go!</button>
    </div>
  );
}

export default App;
