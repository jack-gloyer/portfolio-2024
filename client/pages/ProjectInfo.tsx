import { useParams } from 'react-router-dom'
import { useProjectsById } from '../hooks/useProjects'
import projectList from '../components/projectsList'
import { Project } from '../../models/projects'

function ProjectInfo() {
  const params = useParams()
  const id = Number(params.id)
  const { data: project, isLoading, isError } = useProjectsById(id)

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>something went wrong</p>

  if (project) return
  ;<div className="content">
    {projectList.map((project: Project) => (
      <div key={project.id} className="projectInfo">
        <h1>{project.name}</h1>
        <div className="projectImg">
          <img src={`imgs/${project.logo}`} alt=""></img>
        </div>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
}

export default ProjectInfo
