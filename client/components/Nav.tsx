import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <nav>
        <div className="container">
          <Link to="https://github.com/jack-gloyer">Github </Link>
          <Link to="https://www.linkedin.com/in/jack-gloyer/">Linkedin </Link>
        </div>
      </nav>
    </header>
  )
}
export default Nav
