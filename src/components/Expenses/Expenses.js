import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import './Expenses.css';
import Card from "../UI/Card";


function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear)=>{
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    setCounter(counter + 1);
    console.log(counter)
  };

  const [counter, setCounter] = useState(1);
  console.log(counter)

  





  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
