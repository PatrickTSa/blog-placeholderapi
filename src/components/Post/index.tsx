import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useComments from "~/hooks/useComments";
import { Container, TextStyled, TitleStyled } from "./styles";

const Post = ({ id, title, body }: Post) => {
  const [maxWidth, setMaxWidth] = useState<number>(0);

  const { setPostId } = useComments();

  const postRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    setPostId(id);
  }, [id]);

  useLayoutEffect(() => {
    setMaxWidth(postRef.current?.offsetWidth || 0);
  }, []);

  return (
    <Container onClick={handleClick}>
      <div ref={postRef} style={{ maxWidth: maxWidth || undefined }}>
        <TitleStyled level={4}>{title}</TitleStyled>

        <TextStyled>{body}</TextStyled>
      </div>
    </Container>
  );
};

export default Post;
