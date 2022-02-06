interface Post {
  id: number;
  title: string;
  body: string;
}

interface UserPost extends Post {
  userId: number;
}

type PostCollection = { [key: number]: Post[] };
