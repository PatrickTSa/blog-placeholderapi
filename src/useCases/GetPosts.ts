import { postsToUserCollection } from "~/mappers/posts";
import api from "~/services";

const getPosts = async (): Promise<PostCollection> => {
  try {
    const { data } = await api.get<UserPost[]>("/posts");

    return postsToUserCollection(data);
  } catch {
    return [];
  }
};

export default getPosts;
