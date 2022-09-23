import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  return (
    <div>
      <h2 className="header-text">Expense Tracker Demo</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
    // jsx a special syntax developed by react team, known as javascript xml as html is an xml
  );
}

export default App;
