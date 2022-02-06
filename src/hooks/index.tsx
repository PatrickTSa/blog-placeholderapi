import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "~/theme";
import { CommentProvider } from "./useComments";
import { PostProvider } from "./usePosts";

const Context: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <PostProvider>
      <CommentProvider>{children}</CommentProvider>
    </PostProvider>
  </ThemeProvider>
);

export default Context;
