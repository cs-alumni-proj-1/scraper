/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { render, screen } from "@testing-library/react";
// import App from "../App";

// it("should have something", () => {
//   render(<App />);
//   const message = screen.queryByText(/Current Notification/i);
//   expect(message).toBeDefined();
// });

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banklink from "../components/BankLink";

// Mocking the BankLinkProps
const mockData = {
  name: "Example Bank",
  link: "https://www.examplebank.com",
};

describe("Banklink Component", () => {
  it("renders the bank link with the correct data", () => {
    const { getByText, getByRole } = render(<Banklink data={mockData} />);

    // Assert that the link text is present
    const linkText = getByText("Example Bank");
    expect(linkText).toBeInTheDocument();

    // Assert that the link has the correct href attribute
    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://www.examplebank.com");

    // Assert that the link has the correct styling classes
    expect(linkElement).toHaveClass(
      "text-3xl",
      "font-montaga",
      "border-2",
      "rounded",
      "bg-linkFill",
      "border-linkBorder",
      "m-2",
      "p-2",
      "w-full"
    );
  });
});
