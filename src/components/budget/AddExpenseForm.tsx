import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext)
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })
    setName('');
    setCost('');
  }

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
  )
}

export default AddExpenseForm
