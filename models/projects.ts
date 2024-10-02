export default interface ProjectData {
  name: string
  logo: string
  description: string
  link: string
  route: string
  deployed: boolean
}

export interface Project extends ProjectData {
  id: number
}
