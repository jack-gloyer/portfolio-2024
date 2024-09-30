import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'

function App() {
  return (
    <>
      <div className="content">
        <Nav />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
