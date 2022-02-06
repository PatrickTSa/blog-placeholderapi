import { Card, Typography } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

export const Container = styled(Card)`
  margin-top: 15px;
  transition: all 0.3s;
  width: calc(100% - 48px);

  &:hover {
    background: ${({ theme }) => theme.colors.gallery};
    cursor: pointer;
    width: calc(100% - 30px);
  }

  @media (max-width: 585px) {
    width: auto;
  }
`;

export const TitleStyled = styled(Title)`
  @media (max-width: 400px) {
    font-size: 15px !important;
  }
`;

export const TextStyled = styled(Text)`
  @media (max-width: 400px) {
    font-size: 12px !important;
  }
`;
