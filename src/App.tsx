import './App.css'
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
import Header from './components/Header'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/home" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/ask" element={<Ask />} />
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
  function toggleMenu() {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('open')
  }

  return (
    <>
      <div className="nav">
        <img src="/logo_2.png" alt="logo" />
        <h1>Travel-Plan</h1>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </div>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/plan">Plan</Link>
          </li>
          <li>
            <Link to="/ask">Ask</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
