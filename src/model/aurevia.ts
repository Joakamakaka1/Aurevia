export interface Register {
  email: string;
  username: string;
  password: string;
}

export interface Login {
  email: string;
  hashed_password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  hashed_password: string;
}
