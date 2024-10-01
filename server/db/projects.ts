import connection from './connection.ts'
import { Project } from '../../models/projects.ts'

export async function getAllProjects(db = connection): Promise<Project[]> {
  const projects = db('projects').select(
    'id',
    'name',
    'logo',
    'description',
    'link',
  )
  return projects
}

export async function getProjectById(id: number): Promise<Project> {
  const project = connection('projects').where({ id }).select('*').first()

  return project
}
