import { useQuery } from '@tanstack/react-query'
import { getAllProjects, getProjectById } from '../apis/projects'

export default function useProjects() {
  return useQuery({
    queryFn: getAllProjects,
    queryKey: ['projects'],
  })
}

export function useProjectsById(id: number) {
  return useQuery({
    queryFn: () => getProjectById(id),
    queryKey: ['project'],
  })
}
