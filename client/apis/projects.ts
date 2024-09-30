import request from 'superagent'
import { Project } from '../../models/projects'

const rootUrl = '/api/v1/projects'

export async function getAllProjects() {
  const res = await request.get(`${rootUrl}`)
  return res.body as Project[]
}
