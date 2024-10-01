import { Project } from '../../models/projects'

const projectList: Project[] = [
  {
    id: 1,
    name: 'pawpals',
    logo: 'pawpals.png',
    description:
      'Fullstack, part of a 5 person final group project. Uses Tailwind, React, SQLite, extensive testing and collaborative effort. My part in this team was GitLead',
    link: 'https://pawpals.pushed.nz/',
  },
  {
    id: 2,
    name: 'snakes on a garlic',
    logo: 'snakeGarlic.png',
    description:
      'Friday single day project - 8 hrs total to complete in a team of 5. This project showcases API calls and our first week using proper backend.',
    link: 'https://github.com/matai-2024/Snakes-on-a-garlic',
  },
  {
    id: 3,
    name: 'todo fullstack',
    logo: 'todo.png',
    description:
      'A small fullstack todo app. Needs some more styling, but everything functions!',
    link: 'https://jack-matai24-todos.devacademy.nz/',
  },
]

export default projectList
