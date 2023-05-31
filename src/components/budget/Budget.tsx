import React, {useContext} from 'react';
import {AppContext} from '../../context/AppContext'
import { AiOutlinePlusSquare } from 'react-icons/ai';

const Budget = () => {
  const {budget} = useContext(AppContext)

  return (
    <>
      <div>
      <span className="-button">
            <AiOutlinePlusSquare size="1.2em"/>
        </span>
        <h3>Budget</h3>
        <span>Budget: ${budget}</span>
      </div>
    </>
  )
}

export default Budget
