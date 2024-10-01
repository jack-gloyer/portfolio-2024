import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <button className="button-80">Home</button>
        </Link>
        <Link to="/about">
          <button className="button-80">About</button>
        </Link>
        <Link to="https://github.com/jack-gloyer" target="_blank">
          <button className="button-80">Github</button>
        </Link>
        <Link to="https://www.linkedin.com/in/jack-gloyer/" target="_blank">
          <button className="button-80">Linkedin</button>
        </Link>
      </nav>
      <div className="horizLine"></div>
    </header>
  )
}
export default Nav
