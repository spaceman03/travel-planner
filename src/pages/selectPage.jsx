import React, { useState } from "react";
import "./selectPage.css";

import LocationButton from "../component/locationButton.jsx";
import DateButton from "../component/dateButton.jsx";
import BudgetButton from "../component/budgetButton.jsx";
import PurposeButton from "../component/purposeButton.jsx";

const SelectPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedPurpose, setSelectedPurpose] = useState(null);

  const handleLetsGoClick = () => {
    console.log("Selected Location:", selectedLocation);
    console.log("Selected Start Date:", selectedStartDate.format("DD-MM-YYYY"));
    console.log("Selected End Date:", selectedEndDate.format("DD-MM-YYYY"));
    console.log("Selected Budget:", selectedBudget);
    console.log("Selected Purpose:", selectedPurpose);
  };

  return (
    <div className="selectPage">
      <p>Curate Your Holiday</p>
      <LocationButton onSelect={setSelectedLocation} />
      <DateButton
        onSelect={(startDate, endDate) => {
          setSelectedStartDate(startDate);
          setSelectedEndDate(endDate);
        }}
      />
      <BudgetButton onSelect={setSelectedBudget} />
      <PurposeButton onSelect={setSelectedPurpose} />
      <button onClick={() => handleLetsGoClick()} className="App-button">
        Let's Go!
      </button>
    </div>
  );
};

export default SelectPage;
