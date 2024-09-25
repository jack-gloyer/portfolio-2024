import request from 'superagent'
import { Project } from '../../models/projects'

const rootUrl = 'api/v1'

export function getProjects(): Promise<Project[]> {
  return request.get(`${rootUrl}/projects`).then((res) => {
    return res.body.projects
  })
}
