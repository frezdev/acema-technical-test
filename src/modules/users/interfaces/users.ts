export interface ApiResponse {
  results: UsersResult[];
  nationality: string;
  seed: string;
  version: string;
}

export interface UsersResult {
  user: User;
}

export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
  registered: number;
  dob: number;
  phone: string;
  cell: string;
  HETU: string;
  picture: Picture;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  zip: number;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
