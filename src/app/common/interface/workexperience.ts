export interface WorkExperienceRoot {
  MyWorkExperience: MyWorkExperience[]
}

export interface MyWorkExperience {
  id: number
  company: string
  position: string
  year: string
  description: string
  achivement_details: string;
  achivements: achivement[]
  technologies_used: string[]
}

export interface achivement {
  id: number
  name: string
}
