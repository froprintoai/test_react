import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const YearChangedHandler = (year) => {
    setFilteredYear(year);
  };

  const itemsFilteredByYear = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onYearSelected={YearChangedHandler}/>
      <ExpensesChart expenses={itemsFilteredByYear} />
      <ExpensesList items={itemsFilteredByYear} />
    </Card>
  );
}

export default Expenses;
