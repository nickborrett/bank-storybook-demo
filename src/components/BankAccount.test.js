import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import initStoryshots from "@storybook/addon-storyshots";

import { Normal, Summary, Detailed } from "./BankAccount.stories";

initStoryshots();

test("renders the bank account component with the normal variation", async () => {
  render(<Normal {...Normal.args} />);
  expect(screen.queryByTestId("account-name")).toBeInTheDocument();
  expect(screen.queryByTestId("account-details")).toBeInTheDocument();
  expect(screen.queryByTestId("current-balance")).toBeInTheDocument();
  expect(screen.queryByTestId("transactions")).not.toBeInTheDocument();
});

test("renders the bank account component with the summary variation", async () => {
  render(<Summary {...Summary.args} />);
  expect(screen.queryByTestId("account-name")).toBeInTheDocument();
  expect(screen.queryByTestId("account-details")).not.toBeInTheDocument();
  expect(screen.queryByTestId("current-balance")).toBeInTheDocument();
  expect(screen.queryByTestId("transactions")).not.toBeInTheDocument();
});

test("renders the bank account component with the detailed variation", async () => {
  render(<Detailed {...Detailed.args} />);
  expect(screen.queryByTestId("account-name")).toBeInTheDocument();
  expect(screen.queryByTestId("account-details")).toBeInTheDocument();
  expect(screen.queryByTestId("current-balance")).toBeInTheDocument();
  expect(screen.queryByTestId("transactions")).toBeInTheDocument();
});
