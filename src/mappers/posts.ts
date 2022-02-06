export const postsToUserCollection = (posts: UserPost[]): PostCollection => {
  const data: PostCollection = {};

  posts.forEach((post) => {
    const { userId, id, body, title } = post;

    const newPost: Post = {
      id,
      title,
      body,
    };

    if (data[userId]) {
      data[userId] = [...data[userId], newPost];
    } else {
      data[userId] = [newPost];
    }
  });

  return data;
};
