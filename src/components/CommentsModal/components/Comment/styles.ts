import { Typography, Card } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const Container = styled(Card)`
  margin: 15px;

  @media (max-width: 375px) {
    margin: 2px 0;
  }
`;

export const EmailText = styled(Text)`
  color: ${({ theme }) => theme.colors.silver};
  display: block;
  margin-bottom: 15px;
`;
