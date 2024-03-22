import { render, screen } from "@testing-library/react";
import ContactPage from "./index";
import "@testing-library/jest-dom";

test("ContactPage renders correctly", () => {
  render(<ContactPage />);
  expect(screen.getByRole("heading")).toHaveTextContent("Contact us");
});
