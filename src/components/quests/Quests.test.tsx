import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../test-utils";
import Quests from "./Quests";
import { v4 as uuidv4 } from "uuid";
import user from "@testing-library/user-event";

const initialQuests = [
  {
    name: "Test1",
    description: "Test description 1",
    completed: false,
    id: uuidv4(),
    checklist: [],
  },
  {
    name: "Test2",
    description: "Test description 2",
    completed: false,
    id: uuidv4(),
    checklist: [],
  },
  {
    name: "Test3",
    description: "Test description 3",
    completed: true,
    id: uuidv4(),
    checklist: [],
  },
];

describe("Quests renders correctly.", () => {
  test("Renders current quest items correctly.", () => {
    renderWithProviders(<Quests showCompleted={false} />, {
      preloadedState: {
        quests: initialQuests,
      },
    });
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(initialQuests.length - 1);
  });

  test("Current quests render buttons correctly.", () => {
    renderWithProviders(<Quests showCompleted={false} />);

    // Complete buttons
    const completeButtons = screen.getAllByRole("button", {
      name: /complete quest/i,
    });
    expect(completeButtons).toHaveLength(initialQuests.length - 1);

    // Abandon buttons
    const abandonButtons = screen.getAllByRole("button", {
      name: /abandon quest/i,
    });
    expect(abandonButtons).toHaveLength(initialQuests.length - 1);
  });

  test("renders completed quest list items correctly.", () => {
    renderWithProviders(<Quests showCompleted={true} />, {
      preloadedState: {
        quests: initialQuests,
      },
    });
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();
  });

  test("completed quests render the correct buttons", () => {
    renderWithProviders(<Quests showCompleted={true} />);

    // Clear quest button
    const clearBtn = screen.getByRole("button");
    expect(clearBtn).toBeInTheDocument();
  });
});

describe("Quest buttons", () => {
  test("User can remove the quest from the screen.", async () => {
    user.setup();
    renderWithProviders(<Quests showCompleted={false} />, {
      preloadedState: {
        quests: initialQuests,
      },
    });

    const quest = screen.getByRole("heading", { name: "Test1" });
    const quest_2 = screen.getByRole("heading", { name: "Test2" });
    const completeButtons = screen.getAllByRole("button", {
      name: /complete quest/i,
    });
    const abandonButtons = screen.getAllByRole("button", {
      name: /abandon quest/i,
    });

    expect(quest).toBeInTheDocument();
    await user.click(completeButtons[0]);
    expect(quest).not.toBeInTheDocument();

    expect(quest_2).toBeInTheDocument();
    await user.click(abandonButtons[1]);
    expect(quest_2).not.toBeInTheDocument();
  });

  test("User can clear a completed quest.", async () => {
    user.setup();
    renderWithProviders(<Quests showCompleted={true} />, {
      preloadedState: {
        quests: initialQuests,
      },
    });

    const quest = screen.getByRole("listitem");
    const completeButton = screen.getByRole("button");

    expect(quest).toBeInTheDocument();
    await user.click(completeButton);
    expect(quest).not.toBeInTheDocument();
  });
});
