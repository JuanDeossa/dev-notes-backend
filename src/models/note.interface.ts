export interface Note {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  //
  title: string;
  content: string;
  isFavorite: boolean;
  images: string[];
}

export interface CreateNote {
  userId: string;
  title: string;
  content?: string;
  images?: string[];
}
export interface UpdateNote {
  title?: string;
  content?: string;
  isFavorite?: boolean;
  images?: string[];
}
