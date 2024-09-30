import { Link } from 'react-router-dom'
import { Project } from '../../models/projects'
import useProjects from '../hooks/useProjects'

function Projects() {
  const { data: projects, isLoading, isError } = useProjects()

  if (isLoading) return <p>loading..</p>
  if (isError) return <p>not found</p>
  console.log(projects)

  return (
    <div>
      {projects?.map((project: Project) => (
        <div key={project.id}>
          <Link to={`${project.link}`}>
            <div className="projectCard">
              <div className="projectImg">
                <img src={project.logo} alt=""></img>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Projects
