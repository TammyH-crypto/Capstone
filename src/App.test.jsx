import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("Welcome to the BookStore", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Welcome to the BookStore")).toBeInTheDocument();
});
