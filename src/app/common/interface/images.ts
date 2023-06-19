export interface GalleryRoot {
  MyCertificationList: MyCertificationList[]
}

export interface MyCertificationList {
  id: number
  src: string
  alt: string
  title: string
  path: string
}
