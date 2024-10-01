import { Link } from 'react-router-dom'

interface Props {
  name: string
  logo: string
  description: string
  link: string
}

const ProjectCard: React.FC<Props> = ({ name, logo, description, link }) => (
  <div className="cardContainer">
    <Link to={`${link}`}>
      <div className="projectImg">
        <img src={`imgs/${logo}`} alt=""></img>
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
    </Link>
  </div>
)

export default ProjectCard
