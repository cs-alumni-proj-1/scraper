import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render Current Notifications", () => {
  render(<App />);
  const message = screen.getByText(/Current Notification/i);
  expect(message).toBeVisible();
});

it("renders the pagination bar", () => {
  render(<App />);
  const pageButton = screen.getByText("1");
  expect(screen.getByText("1")).toBeVisible();
});
