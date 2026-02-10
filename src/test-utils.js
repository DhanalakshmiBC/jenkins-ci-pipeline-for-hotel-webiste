import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "../context";

export const mockContextValue = {
  searchParam: "",
  setSearchParam: jest.fn(),
  handleSubmit: jest.fn(),
  toggleTheme: jest.fn(),
  theme: "light",
};

export const TestWrapper = ({ children }) => (
  <BrowserRouter>
    <GlobalContext.Provider value={mockContextValue}>
      {children}
    </GlobalContext.Provider>
  </BrowserRouter>
);