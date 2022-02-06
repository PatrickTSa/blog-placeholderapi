import { Spin, Input } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useComments from "~/hooks/useComments";
import {
  Button,
  CommentContainer,
  Container,
  Content,
  Footer,
  InputContainer,
  InputTitle,
  LoadingContent,
  ModalStyled,
} from "./styles";
import Comment from "./components/Comment";

interface CommentsModalProps {
  visible: boolean;
}

const CommentsModal = ({ visible }: CommentsModalProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [comment, setComment] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const {
    postId,
    comments,
    localComments,
    setPostId,
    loadByPostId,
    createComment,
  } = useComments();

  const contentRef = useRef<HTMLDivElement>(null);

  const data = useMemo(() => {
    if (localComments.some((item) => item.postId === postId)) {
      return [
        ...comments,
        ...localComments.filter((item) => item.postId === postId),
      ];
    }

    return comments;
  }, [comments, localComments]);

  const handleClose = useCallback(() => {
    setPostId(undefined);
  }, []);

  const load = useCallback(async (id: number) => {
    setLoading(true);
    try {
      await loadByPostId(id);

      contentRef.current?.scrollTo({ top: 0 });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCreateComment = useCallback(() => {
    if (!postId) {
      return;
    }

    createComment({
      postId,
      name: title,
      email: "development@mail.com",
      body: comment,
    });

    setTitle("");
    setComment("");

    setTimeout(() => {
      contentRef.current?.scrollTo({ top: 9999999, behavior: "smooth" });
    }, 150);
  }, [postId, title, comment, createComment]);

  useEffect(() => {
    if (visible && postId) {
      setTitle("");
      setComment("");
      load(postId);
    }
  }, [visible, postId]);

  return (
    <ModalStyled
      visible={visible}
      footer={null}
      onCancel={handleClose}
      title="Comments"
    >
      <Container>
        {loading ? (
          <LoadingContent>
            <Spin />
          </LoadingContent>
        ) : (
          <CommentContainer>
            <Content ref={contentRef}>
              {data.map((item) => (
                <Comment key={item.id} {...item} />
              ))}
            </Content>
            <Footer>
              <InputContainer>
                <InputTitle
                  value={title}
                  placeholder="Your title..."
                  onChange={({ target }) => setTitle(target.value)}
                />
                <Input
                  value={comment}
                  placeholder="Open your mind..."
                  onChange={({ target }) => setComment(target.value)}
                />
              </InputContainer>
              <Button
                disabled={!comment}
                type="primary"
                onClick={handleCreateComment}
              >
                Send
              </Button>
            </Footer>
          </CommentContainer>
        )}
      </Container>
    </ModalStyled>
  );
};

export default CommentsModal;
