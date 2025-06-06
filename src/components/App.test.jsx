import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Welcome to my book swap", () => {
  render(<App />);
  expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
});
