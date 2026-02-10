import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalContext } from "./context"; // adjust path if needed

const mockContextValue = {
  searchParam: "",
  setSearchParam: jest.fn(),
  handleSubmit: jest.fn(),
  toggleTheme: jest.fn(),
  theme: "light",
};

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <GlobalContext.Provider value={mockContextValue}>
        <App />
      </GlobalContext.Provider>
    </BrowserRouter>
  );

  expect(
    screen.getByText(/nothing to show\. please search something/i)
  ).toBeInTheDocument();
});