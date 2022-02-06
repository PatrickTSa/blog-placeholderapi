import { Avatar, Card, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Container, EmailText } from "./styles";

const { Meta } = Card;

const { Text } = Typography;

const Comment = ({ name, email, body }: PostComment) => {
  const [padding, setPadding] = useState<number>(24);

  const checkWidth = useCallback(() => {
    const { matches } = window.matchMedia(`(max-width: 375px)`);
    setPadding(matches ? 0 : 24);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <Container
      bodyStyle={{
        padding,
      }}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={name}
      />
      <EmailText>{email}</EmailText>
      <Text>{body}</Text>
    </Container>
  );
};

export default Comment;
