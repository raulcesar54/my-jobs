import { Error } from "@/components";
import { TESTS } from "@/strings";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Error", () => {
  it("renders error component", () => {
    render(<Error label="erro teste" />);

    const error = screen.getByTestId(TESTS.ERROR);
    expect(error).toBeInTheDocument();
  });
  it("renders error icon", () => {
    render(<Error label="erro teste" />);

    const error = screen.getByTestId(TESTS.ERROR_ICON);
    expect(error).toBeInTheDocument();
  });
});
