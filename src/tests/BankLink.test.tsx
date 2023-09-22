import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banklink from "../components/BankLink";

const mockData = {
  name: "Example Bank",
  link: "https://www.examplebank.com",
};

describe("Banklink Component", () => {
  it("renders the bank link with the correct data", () => {
    const { getByText, getByRole } = render(<Banklink data={mockData} />);

    const linkText = getByText("Example Bank");
    expect(linkText).toBeVisible();

    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://www.examplebank.com");
  });
});
