import { Card } from "antd";
import styled from "styled-components";

export const Container = styled(Card)`
  margin-bottom: 15px;
  width: 768px;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    display: block;
  }
`;
