import { postsToUserCollection } from "./posts";

describe("postsToUserCollection", () => {
  it("should map post to user collection", () => {
    const POST = [
      {
        userId: 1,
        id: 1,
        title: "Title",
        body: "lorem ipsum dolor",
      },
      {
        userId: 1,
        id: 2,
        title: "Title",
        body: "lorem ipsum dolor",
      },
      {
        userId: 2,
        id: 1,
        title: "Title",
        body: "lorem ipsum dolor",
      },
    ];

    const EXPECTED_COLLECTION = {
      1: [
        { body: "lorem ipsum dolor", id: 1, title: "Title" },
        { body: "lorem ipsum dolor", id: 2, title: "Title" },
      ],
      2: [{ body: "lorem ipsum dolor", id: 1, title: "Title" }],
    };

    const receivedCollection = postsToUserCollection(POST);

    expect(receivedCollection).toStrictEqual(EXPECTED_COLLECTION);
  });
});
