import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
  // Access the dispatch function from AppContext
  const { dispatch } = useContext(AppContext);

  // Define state variables for name and cost
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  // Handle form submission
  const onSubmit = (event) => {
    event.preventDefault();

    // Create an expense object with unique ID, name, and cost
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    // Dispatch the expense object to update the state
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    // Reset the name and cost input fields
    setName('');
    setCost('');
  };

  // Render the form
  return (
    <>
      <div>
        <div className="container">
          <form onSubmit={onSubmit}>
            <div className="center">
              <div className="col-25">
                <label htmlFor="name">Name: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  required={true}
                  className="col-75"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>

            <div className="center">
              <div className="col-25">
                <label htmlFor="cost">Cost: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  required={true}
                  className="form-control"
                  id="cost"
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                />
              </div>
            </div>

            <div className="center">
              <button type="submit" value="Submit" className="btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default AddExpenseForm
