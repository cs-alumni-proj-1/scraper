import React from 'react'
import App from "../App";
import { render, screen } from "@testing-library/react";

it("should have something", () => {
  render(<App />);
  const message = screen.queryByText(/Current Notification/i);
  expect(message).toBeDefined();
});
