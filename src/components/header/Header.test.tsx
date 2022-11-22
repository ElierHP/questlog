import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Header from "./Header";
import { headerData } from "./headerData";
import user from "@testing-library/user-event";

describe("Header", () => {
  // Heading & Logo Render
  test("renders logos correctly.", () => {
    renderWithProviders(<Header />);
    // Logo in the main navbar
    const headerLogo = screen.getByRole("img", {
      name: /header\-logo/i,
    });
    expect(headerLogo).toBeInTheDocument();

    // Logo located in the mobile menu
    const mobileMenuLogo = screen.getByRole("img", {
      name: /mobile\-menu\-logo/i,
    });
    expect(mobileMenuLogo).toBeInTheDocument();
  });

  test("renders nav list", () => {
    renderWithProviders(<Header />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(headerData.length);
  });

  test("navigation highlights current active page.", async () => {
    user.setup();
    renderWithProviders(<Header />);

    // Get all navbar anchor tags.
    const currentLink = screen.getByRole("link", { name: "Current" });
    const newLink = screen.getByRole("link", { name: "New" });
    const completedLink = screen.getByRole("link", { name: "Completed" });

    // Current anchor should load with the correct class
    expect(currentLink).toHaveClass("selected");

    // If user clicks on the "new" anchor, it should have the correct class
    await user.click(newLink);
    expect(newLink).toHaveClass("selected");

    // If user clicks on the "completed" anchor, it should have the correct class
    await user.click(completedLink);
    expect(completedLink).toHaveClass("selected");

    // If user clicks on the logo, the "current" anchor should have the correct class
    const logo = screen.getByRole("img", { name: /header\-logo/i });
    await user.click(logo);
    expect(currentLink).toHaveClass("selected");
  });
});
