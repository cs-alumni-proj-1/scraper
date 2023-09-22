import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

it("should render Current Notifications", () => {
  render(<App />);
  const message = screen.queryByText(/Current Notification/i);
  expect(message).toBeVisible();
});

it("renders the pagination bar", () => {
  render(<App />);
  const pageButton = screen.getByText("1");
  userEvent.click(pageButton);
  expect(screen.getByText("1")).toBeVisible();
});
