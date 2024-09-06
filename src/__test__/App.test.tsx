/* eslint-disable @typescript-eslint/no-unused-vars */
//import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App, { GET_BOOKS } from "../App";
import { MockedProvider as ApolloProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";

const mock = [
  {
    request: {
      query: GET_BOOKS,
    },
    result: {
      data: {
        books: [
          { title: "The marvel comics",author:"kabera" },
          { title: "DC movies" },
        ],
      },
    },
    maxUsageCount: 11,
  },
];

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page",async () => {
  render(
    <BrowserRouter>
      <ApolloProvider addTypename={false} mocks={mock}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  );
  await waitFor(() => new Promise((res) => setTimeout(res, 0)));
  expect(screen.getByText(/DC movies/i)).toBeDefined();
  expect(screen.getByText("The marvel comics")).toBeDefined();
  screen.debug(undefined, 100000);
});
