import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../test-utils";
import Tasks from "./Tasks";

test("Tasks renders list items", async () => {
  const initialTasks = [
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

  renderWithProviders(<Tasks />, {
    preloadedState: {
      tasks: {
        tasks: initialTasks,
      },
    },
  });

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(2);
});
