import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../test-utils";
import Quests from "./Quests";

test("Quests renders list items", async () => {
  const initialQuests = [
    {
      name: "Test1",
      description: "Test description 1",
      completed: false,
    },
    {
      name: "Test2",
      description: "Test description 2",
      completed: true,
    },
  ];

  renderWithProviders(<Quests quests={initialQuests} />);

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(initialQuests.length);
});
