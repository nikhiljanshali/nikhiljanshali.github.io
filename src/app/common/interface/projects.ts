export interface ProjectRoot {
  MyProjectExperience: MyProjectExperience[]
}

export interface MyProjectExperience {
  id: number
  name: string
  role: string
  description: description[]
  technologies_used: string[]
  teamsize: string,
  project_type: string,
  project_period: string
}

export interface description {
  id: number
  name: string
}
