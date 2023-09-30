import { Card } from "@/components";
import { TESTS } from "@/strings";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("renders card component", () => {
    render(<Card />);

    const card = screen.getByTestId(TESTS.CARD);
    expect(card).toBeInTheDocument();
  });
});
