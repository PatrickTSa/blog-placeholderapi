import { render, screen } from "@testing-library/react";
import Context from "~/hooks";
import Comment from ".";

describe("<Comment />", () => {
  it("should render the comment component", () => {
    const BODY_TEXT = "Lorem ipsum dolor";
    const EMAIL = "contact@rust.com";
    const NAME = "Elisabeth Roweder";

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(
      <Context>
        <Comment postId={1} id={1} body={BODY_TEXT} email={EMAIL} name={NAME} />
      </Context>
    );

    const body = screen.getByText(BODY_TEXT);
    const email = screen.getByText(EMAIL);
    const name = screen.getByText(NAME);

    expect(body).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
