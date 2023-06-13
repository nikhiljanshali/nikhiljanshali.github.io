export interface InfoRoot {
  MyInfo: MyInfo[]
}

export interface MyInfo {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string[];
  phone: string[];
  address: string;
  about: string;
  latitude: number;
  longitude: number;
  tags: tagsIcon[];
  greeting: string;
  favoriteFruit: string;
}

export interface tagsIcon {
  iconname: string,
  name: string,
  id: number
}
