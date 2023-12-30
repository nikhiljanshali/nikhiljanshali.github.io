export interface EducationRoot {
  MyEducation: MyEducation[]
}

export interface MyEducation {
  id: number
  degree: string
  stream: string
  college: string
  university: string
  board: string
  percentage: number
  year: string
}
