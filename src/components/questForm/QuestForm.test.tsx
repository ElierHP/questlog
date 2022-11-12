import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../test-utils";
import QuestForm from "./QuestForm";

describe("QuestForm", () => {
  test("renders button correctly", () => {
    renderWithProviders(<QuestForm />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
