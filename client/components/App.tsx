import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
