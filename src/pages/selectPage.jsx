import React, { useState } from "react";
import "./selectPage.css";

import LocationButton from "../component/locationButton.jsx";
import DateButton from "../component/dateButton.jsx";
import BudgetButton from "../component/budgetButton.jsx";
import PurposeButton from "../component/purposeButton.jsx";
import axios from "axios";

const SelectPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedPurpose, setSelectedPurpose] = useState(null);

  const handleLetsGoClick = async () => {
    
    // Log or use the start and end dates as needed
    // console.log('Selected Location:', selectedLocation);
    // console.log('Selected Start Date:', selectedStartDate.format('DD-MM-YYYY'));
    // console.log('Selected End Date:', selectedEndDate.format('DD-MM-YYYY'));
    // console.log('Selected Budget:', selectedBudget);
    // console.log('Selected Purpose:', selectedPurpose);

    // Create the content for instructionMessage including the extracted values
    const content = "Plan an itinerary for a trip to ${selectedLocation} from ${selectedStartDate.format('DD-MM-YYYY')} to ${selectedEndDate.format('DD-MM-YYYY')} with ${selectedBudget} budget for ${selectedPurpose}";
    console.log(content);
    const userMessage = {
        role: "user",
        content: content,
    };

    const newMessages = [userMessage];

    console.log(JSON.stringify(content), " stringify content")
    console.log(newMessages, "from content")

    const response = await axios.post("api/plan", {
        messages: newMessages,
    })
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
      <button onClick={() => handleLetsGoClick()} className="selectPage-button">
        Let's Go!
      </button>
    </div>
  );
};

export default SelectPage;
