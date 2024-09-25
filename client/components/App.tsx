import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'
import Home from '../pages/Home.tsx'

function App() {
  return (
    <>
      <div className="content">
        <Nav />
        <div className="container">
          <Outlet />
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
