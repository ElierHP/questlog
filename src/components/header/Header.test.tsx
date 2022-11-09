import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Header from "./Header";

describe("Navbar", () => {
  test("renders heading", () => {
    renderWithProviders(<Header />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
