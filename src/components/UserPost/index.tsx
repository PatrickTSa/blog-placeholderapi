import { Avatar, Card } from "antd";
import { useMemo } from "react";
import usePosts from "~/hooks/usePosts";
import Post from "~/components/Post";
import { Container, Content } from "./styles";

const { Meta } = Card;

interface UserPostProps {
  id: number;
}

const UserPost = ({ id }: UserPostProps) => {
  const { posts } = usePosts();

  const data = useMemo(() => posts[id], [id, posts]);

  return (
    <Container>
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={`User 0${id}`}
      />
      <Content>
        {data.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Content>
    </Container>
  );
};

export default UserPost;
