import { GithubOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const { Header: HeaderAntd } = Layout;

export const Container = styled(Layout)`
  height: 100vh;
`;

export const PostContainer = styled(Layout)`
  align-items: center;
  display: flex;
  overflow: auto;
  padding-top: 15px;
`;

export const Header = styled(HeaderAntd)`
  align-items: center;
  background-image: radial-gradient(circle at 50% 11%, #446db4, #2c3179 74%);
  display: flex;
  justify-content: center;
`;

export const HeaderTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.white} !important;
  margin-bottom: 0 !important;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 28px !important;
  }

  @media (max-width: 380px) {
    font-size: 18px !important;
  }
`;

export const GitHubIcon = styled(GithubOutlined)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 25px;
  position: absolute;
  right: 20px;
  top: 20px;
  transition: all 0.3s;

  &:hover {
    font-size: 30px;
    right: 17.5px;
    top: 17.5px;
  }
`;
