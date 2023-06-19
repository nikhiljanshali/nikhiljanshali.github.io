export interface GalleryRoot {
  MyCertificationList: MyCertificationList[]
}

export interface MyCertificationList {
  id: number
  name: string
  path: string
}
