import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../../context/AppContext'
import './budget.css'

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }

  return (
    <div className="exp-items">
      <ul>
        <li>
          <span className="-button" onClick={handleDeleteExpense}>
            <TiDelete size="1.5em" />
          </span>
        
          
            {props.name} ${props.cost}
          
        </li>
      </ul>
    </div>
  )
}

export default ExpenseItem
