import { Title } from "@/components";
import { TESTS } from "@/strings";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Title", () => {
  it("renders title component", () => {
    render(<Title title="titulo" subtitle="subtitulo" />);

    const title = screen.getByTestId(TESTS.TITLE);
    expect(title).toBeInTheDocument();
  });
});
