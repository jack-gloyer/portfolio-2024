import About from '../components/About'
import Projects from '../components/Projects'

function Home() {
  return (
    <div className="content">
      <h1>This is my portfolio</h1>
      <h2>About Me</h2>
      <About />
      <Projects />
    </div>
  )
}

export default Home
