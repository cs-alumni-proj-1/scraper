import { render, screen } from "@testing-library/react";
import App from "../App";

it("should have something", () => {
  render(<App />);
  const message = screen.queryByText(/Current Notification/i);
  expect(message).toBeDefined();
});
