import { Project } from '../../models/projects'
import About from '../components/About'
import ProjectCard from '../components/dumb/ProjectCard'
import Footer from '../components/Footer'
import Picture from '../components/Picture'
// import useProjects from '../hooks/useProjects'
import projectList from '../components/projectsList'

function Home() {
  // const { data: projects, isLoading, isError } = useProjects()
  // if (isLoading) return <p>loading..</p>
  // if (isError) return <p>not found</p>

  return (
    <div className="content">
      <h1>Jack Gloyer&#39;s Portfolio</h1>
      <div className="blurb">
        <Picture />
        <About />
      </div>
      <h2>Projects</h2>
      {projectList?.map((project: Project) => (
        <div className="cardContainer" key={project.id}>
          <ProjectCard
            name={project.name}
            link={project.link}
            description={project.description}
            logo={project.logo}
          />
        </div>
      ))}
      <Footer />
    </div>
  )
}

export default Home
