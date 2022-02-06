import { Layout } from "antd";
import CommentsModal from "~/components/CommentsModal";
import UserPost from "~/components/UserPost";
import useComments from "~/hooks/useComments";

import usePosts from "~/hooks/usePosts";
import {
  Container,
  HeaderTitle,
  PostContainer,
  Header,
  GitHubIcon,
} from "./styles";

const Home = () => {
  const { posts } = usePosts();
  const { postId } = useComments();

  return (
    <Container>
      <Header>
        <HeaderTitle>Placeholder Blog</HeaderTitle>
        <GitHubIcon
          onClick={() => window.open("https://github.com/PatrickTSa")}
        />
      </Header>
      <Layout>
        <PostContainer>
          {Object.keys(posts).map((id) => (
            <UserPost key={id} id={Number(id)} />
          ))}

          <CommentsModal visible={!!postId} />
        </PostContainer>
      </Layout>
    </Container>
  );
};

export default Home;
