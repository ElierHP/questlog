import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders heading", () => {
    render(<Navbar />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
