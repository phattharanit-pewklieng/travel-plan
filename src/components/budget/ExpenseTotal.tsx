import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { TypeInitialState } from '../../context/AppContext'; // Import the interface

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext) as TypeInitialState; // Use the interface for type assertion

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <>
      <div>
        <h3>ExpenseTotal</h3>
        <span>Spent so far: ${totalExpenses}</span>
      </div>
    </>
  );
};

export default ExpenseTotal;
