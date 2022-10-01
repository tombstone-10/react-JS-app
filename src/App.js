import Expenses from "./components/Expenses";
import "./App.css";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 0, 19),
    },

    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 3, 12)
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },

    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  return (
    <div>
      <h2 className="header-text">Expense Tracker Demo</h2>

      <Expenses items={ expenses } />

    </div >
    // jsx a special syntax developed by react team, known as javascript xml as html is an xml
  );
}

export default App;
