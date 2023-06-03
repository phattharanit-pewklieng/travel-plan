import './App.css'
import './components/home.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Plan from './components/Plan'
import Ask from './components/Ask'
import BudgetTracker from './components/budget/TrackerBudget'
import TodoList from './components/todos/TodoList'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
// import Header from './components/Header'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/budget" element={<BudgetTracker />} />
        <Route path="/todos" element={<TodoList />} />
      </Route>
    )
  )
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
        <Footer />
      </div>
     
    </>
  )
}

//link
const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleSearch = (searchTerm: string) => {
    // Perform your search operation here
    // You can send the search term to a server, query a database, or implement any other search functionality
    console.log('Search term:', searchTerm);
  };

  return (
    <>
 
      <header className="header">
        <nav className="navbar">
         
            <img src="/logo_01.png" alt="logo" width="80px" height="80px" />
            {/* <h1>Travel-Plan</h1> */}
        
            <SearchBar onSearch={handleSearch}/>

          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-menu${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/plan" className="nav-link" onClick={closeMenu}>
                Plan
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ask" className="nav-link" onClick={closeMenu}>
                Ask
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/budget" className="nav-link" onClick={closeMenu}>
                Budget Tracker
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/todos" className="nav-link" onClick={closeMenu}>
                Todo List
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
       
      </div> 
    </>
  )
}

export default App
