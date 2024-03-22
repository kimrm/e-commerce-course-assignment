import { render } from "@testing-library/react";
import Contact from "./index";

describe("Contact component", () => {
  it("should render contact component", () => {
    const handleOnSuccess = jest.fn();
    render(<Contact onSuccess={handleOnSuccess} />);
    expect(handleOnSuccess).not.toHaveBeenCalled();
    expect(true).toBeTruthy();
  });
});
