import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <nav className="nav">
        <button className="navButton">
          <Link to="/">Home</Link>
        </button>
        <button className="navButton">
          <Link to="/about">About</Link>
        </button>
        <button className="navButton">
          <Link to="https://github.com/jack-gloyer">Github </Link>
        </button>
        <button className="navButton">
          <Link to="https://www.linkedin.com/in/jack-gloyer/">Linkedin </Link>
        </button>
      </nav>
    </header>
  )
}
export default Nav
