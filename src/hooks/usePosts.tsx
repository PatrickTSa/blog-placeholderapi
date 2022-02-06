import React, { createContext, useContext, useEffect, useState } from "react";
import getPosts from "~/useCases/GetPosts";

interface PostDataType {
  posts: PostCollection;
  loading: boolean;
}

const PostContext = createContext({} as PostDataType);

export const PostProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<PostCollection>({});
  const [loading, setLoading] = useState<boolean>(true);

  const load = async () => {
    setLoading(true);
    try {
      setPosts(await getPosts());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading }}>
      {children}
    </PostContext.Provider>
  );
};

const usePosts = () => {
  const context = useContext(PostContext);

  if (context) {
    return context;
  }

  throw new Error("Post provider must be defined.");
};

export default usePosts;
