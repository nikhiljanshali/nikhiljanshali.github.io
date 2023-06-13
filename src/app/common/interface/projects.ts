export interface ProjectRoot {
  MyProjectExperience: MyProjectExperience[]
}

export interface MyProjectExperience {
  id: number
  name: string
  role: string
  responsibility: string
  description: description[]
  technologies_used: string[]
  teamsize: string
}

export interface description {
  id: number
  name: string
}
