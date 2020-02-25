export interface Post {
  id: number;
  title: string;
  votes: number;
  author: Author;
}

export interface Author {
  id: number;
  firstName: string;
  lastName: number;
}
