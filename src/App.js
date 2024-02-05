import './App.css';

import LocationButton  from './components/locationButton.jsx';
import DateButton from './components/dateButton.jsx';
import BudgetButton from './components/budgetButton.jsx';
import PurposeButton from './components/purposeButton.jsx';

function App() {
  return (
    <div className="App">
      <p>test</p>
      <LocationButton ></LocationButton>
      <DateButton ></DateButton>
      <BudgetButton ></BudgetButton>
      <PurposeButton ></PurposeButton>
    </div>
  );
}

export default App;
