import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { CommentContext } from "~/hooks/useComments";
import defaultTheme from "~/theme";
import Post from ".";

const mockSetPostId = jest.fn();

const renderComponent = (id: number, title = "Title", body = "Body") => {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <CommentContext.Provider
        value={{
          postId: 1,
          comments: [],
          localComments: [],
          setPostId: mockSetPostId,
          loadByPostId: jest.fn(),
          createComment: jest.fn(),
        }}
      >
        <Post id={id} title={title} body={body} />
      </CommentContext.Provider>
    </ThemeProvider>
  );
};

describe("<Post />", () => {
  it("should render the param data", () => {
    const TITLE_TEXT = "My first post";
    const BODY_TEXT = "lorem ipsum dolor";

    renderComponent(1, TITLE_TEXT, BODY_TEXT);

    const title = screen.getByText(TITLE_TEXT);
    const body = screen.getByText(BODY_TEXT);

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });

  it("should set post id when clicked", () => {
    const ID = 10;

    renderComponent(ID);

    const container = screen.getByTestId("post-container");

    fireEvent.click(container);

    expect(mockSetPostId).toHaveBeenCalledWith(ID);
  });
});
