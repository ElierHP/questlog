import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Checklist from "./Checklist";
import { questData } from "../../app/utils/questData";
import user from "@testing-library/user-event";
import Quests from "../quests/Quests";

test("Checklist renders correctly.", () => {
  const quest = questData[0];
  renderWithProviders(<Checklist quest={quest} />, {
    preloadedState: {
      quests: questData,
    },
  });

  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();

  const listItem = screen.getAllByRole("listitem");
  expect(listItem).toHaveLength(quest.checklist.length);
});

test("Checkbox toggles true and false correctly when clicked.", async () => {
  const quest = questData[0];
  user.setup();
  renderWithProviders(<Quests showCompleted={false} />, {
    preloadedState: {
      quests: questData,
    },
  });

  const checkbox = screen.getByTestId(quest.checklist[0].id);

  // Checkbox checks and unchecks when user
  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
