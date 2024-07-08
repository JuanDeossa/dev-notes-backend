export interface Session {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  //
  userId: string;
  token: string;
}

export interface CreateSession {
  userId: string;
}
