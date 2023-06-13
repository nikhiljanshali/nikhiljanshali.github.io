export interface SkillRoot {
  MySkills: MySkill[]
}

export interface MySkill {
  FrontEnd: FrontEnd[]
  BackEnd: BackEnd[]
  Others: Other[]
  KeySkill: KeySkill[]
}

export interface FrontEnd {
  name: string
  percentage: number
  id: number
}

export interface BackEnd {
  name: string
  percentage: number
  id: number
}

export interface Other {
  name: string
  percentage: number
  id: number
}

export interface KeySkill {
  name: string
  percentage: number
  id: number
}
