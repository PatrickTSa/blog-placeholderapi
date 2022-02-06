import styled from "styled-components";
import { Button as ButtonAntd, Input as InputAntd, Modal } from "antd";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 70vh;
`;

export const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const InputTitle = styled(InputAntd)`
  margin-right: 15px;
  width: 300px;

  @media (max-width: 460px) {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const Button = styled(ButtonAntd)`
  margin-left: 15px;
`;

export const Footer = styled.div`
  display: flex;
  margin: 8px 15px 15px;

  @media (max-width: 460px) {
    display: flex;
    align-items: center;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalStyled = styled(Modal).attrs(() => ({
  bodyStyle: { padding: 0 },
}))`
  min-width: 35vw;
  width: 35vw;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;
