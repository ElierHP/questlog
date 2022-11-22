import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { v4 as uuidv4 } from "uuid";
import Checklist from "./Checklist";

const initialQuests = [
  {
    name: "Test1",
    description: "Test description 1",
    completed: false,
    id: uuidv4(),
    checklist: [
      { name: "test checklist", checked: true, id: uuidv4() },
      { name: "test checklist2", checked: false, id: uuidv4() },
    ],
  },
];

test("Checklist renders correctly.", () => {
  const checklist = initialQuests[0].checklist;
  renderWithProviders(
    <Checklist checklist={checklist} questId={initialQuests[0].id} />
  );
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();

  const listItem = screen.getAllByRole("listitem");
  expect(listItem).toHaveLength(checklist.length);
});
