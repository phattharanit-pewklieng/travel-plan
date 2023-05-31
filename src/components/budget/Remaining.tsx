import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total: number, item) => {
    return total + item.cost;
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <>
      <div>
        <h3>Remaining</h3>
        <div className={`alert ${alertType}`}>
          <span>Remaining: ${budget - totalExpenses}</span>
        </div>
      </div>
    </>
  );
};

export default Remaining;
