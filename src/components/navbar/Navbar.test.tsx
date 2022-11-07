import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders heading", () => {
    renderWithProviders(<Navbar />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
