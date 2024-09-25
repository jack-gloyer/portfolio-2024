export default interface ProjectData {
  name: string
  logo: string
  description: string
  link: string
}

export interface Project extends ProjectData {
  id: number
}
