import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../test-utils";
import Quests from "./Quests";
import { v4 as uuidv4 } from "uuid";

const initialQuests = [
  {
    name: "Test1",
    description: "Test description 1",
    completed: false,
    id: uuidv4(),
  },
  {
    name: "Test2",
    description: "Test description 2",
    completed: false,
    id: uuidv4(),
  },
  {
    name: "Test3",
    description: "Test description 3",
    completed: true,
    id: uuidv4(),
  },
];

describe("Quests renders correctly.", () => {
  test("Renders list items correctly.", () => {
    renderWithProviders(<Quests quests={initialQuests} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(initialQuests.length);
  });

  test("Current quests render buttons correctly.", () => {
    renderWithProviders(<Quests quests={initialQuests} />);
    // Quests that have not been completed yet.
    const currentQuests = initialQuests.filter(
      (quest) => quest.completed === false
    );

    // Complete buttons
    const completeButtons = screen.getAllByRole("button", {
      name: /complete quest/i,
    });
    expect(completeButtons).toHaveLength(currentQuests.length);

    // Abandon buttons
    const abandonButtons = screen.getAllByRole("button", {
      name: /abandon quest/i,
    });
    expect(abandonButtons).toHaveLength(currentQuests.length);
  });
});
