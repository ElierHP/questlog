import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Header from "./Header";
import { headerData } from "./headerData";
import user from "@testing-library/user-event";

describe("Header", () => {
  // Heading & Logo Render
  test("renders logo", () => {
    renderWithProviders(<Header />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    const headingLink = screen.getByRole("link", { name: "Quest Log" });
    expect(headingLink).toBeInTheDocument();
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

    // Current anchor should load with the class "secondary".
    expect(currentLink).toHaveClass("secondary");

    // If user clicks on the "new" anchor, it should get class "secondary"
    await user.click(newLink);
    expect(newLink).toHaveClass("secondary");

    // If user clicks on the "completed" anchor, it should get class "secondary"
    await user.click(completedLink);
    expect(completedLink).toHaveClass("secondary");

    // If user clicks on the logo, the "current" anchor should get class "secondary"
    const heading = screen.getByRole("link", { name: "Quest Log" });
    await user.click(heading);
    expect(currentLink).toHaveClass("secondary");
  });
});
