export interface Register {
  email: string;
  username: string;
  password: string;
  role: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  role: string;
  image_url: null;
  trips: any[];
  comments: any[];
}
