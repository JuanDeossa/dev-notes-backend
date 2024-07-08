export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  //
  email: string;
  password: string;
}

export interface CreateUser {
  email: string;
  password: string;
}
export interface UpdateUser {
  password?: string;
}
