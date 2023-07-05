import { AppProvider } from '../../context/AppContext'
import AddExpenseForm from './AddExpenseForm'
import Budget from './Budget'
import ExpenseTotal from './ExpenseTotal'
import Remaining from './Remaining'
import ExpenseList from './ExpenseList'
import './budget.css'

const BudgetTracker = () => {
  return (
    <>
      <AppProvider>
        <div className="box-budget plan-box">
          <div>
            <h1>My Budget Planner</h1>

            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnVkZ2V0JTIwVHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Budget"
              width="400px"
              height="150px"
            />
          </div>

          <div className="row">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          </div>
          <h1 style={{ color: '#53b7ea', textDecoration: 'underline' }}>
            Add Expense
          </h1>
          <div className="box">
            <div className="col-xl">
              <AddExpenseForm />
            </div>
          </div>

          <div className="box">
            <div className="col-xl">
              <ExpenseList />
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  )
}

export default BudgetTracker
