import { Button } from "@/components";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TESTS } from "@/strings";

describe("Button", () => {
  it("renders button component", () => {
    render(<Button label="testing" />);

    const button = screen.getByTestId(TESTS.BUTTON);
    expect(button).toBeInTheDocument();
  });
  it("called function when button is clicked", () => {
    const clickedFunction = jest.fn();
    render(<Button label="testing" onPress={clickedFunction} />);

    const button = screen.getByTestId(TESTS.BUTTON);

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(clickedFunction).toBeCalled();
  });
});
