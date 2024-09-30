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
