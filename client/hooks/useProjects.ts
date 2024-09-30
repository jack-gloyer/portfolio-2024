import { useQuery } from '@tanstack/react-query'
import { getAllProjects } from '../apis/projects'

export default function useProjects() {
  return useQuery({
    queryFn: getAllProjects,
    queryKey: ['projects'],
  })
}
