import React, { createContext, useContext, useState } from "react";
import getComments from "~/useCases/GetComments";

interface CommentsDataType {
  postId: number | undefined;
  comments: PostComment[];
  localComments: PostComment[];
  setPostId(postId: number | undefined): void;
  loadByPostId(id: number): void;
  createComment(comment: Omit<PostComment, "id">): void;
}

export const CommentContext = createContext({} as CommentsDataType);

export const CommentProvider: React.FC = ({ children }) => {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [localComments, setLocalComments] = useState<PostComment[]>([]);
  const [postId, setPostId] = useState<number>();

  const loadByPostId = async (id: number) => {
    setComments(await getComments(id));
  };

  const createComment = (comment: Omit<PostComment, "id">) => {
    setLocalComments((prev) => {
      return [...prev, { ...comment, id: prev.length }];
    });
  };

  return (
    <CommentContext.Provider
      value={{
        postId,
        comments,
        localComments,
        setPostId,
        loadByPostId,
        createComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

const useComments = () => {
  const context = useContext(CommentContext);

  if (context) {
    return context;
  }

  throw new Error("Comments provider must be defined.");
};

export default useComments;
