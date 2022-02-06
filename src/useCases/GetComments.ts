import api from "~/services";

const getComments = async (postId: number): Promise<PostComment[]> => {
  try {
    const { data } = await api.get<PostComment[]>("/comments", {
      params: {
        postId,
      },
    });

    return data;
  } catch {
    return [];
  }
};

export default getComments;
