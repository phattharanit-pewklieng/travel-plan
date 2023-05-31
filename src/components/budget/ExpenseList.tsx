import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../../context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext<{ expenses: { id: number; name: string; cost: number }[] }>(AppContext);

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
