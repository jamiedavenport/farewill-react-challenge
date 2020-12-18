import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("../fetchQuotes");

describe("App", () => {
  it("should display a loading indicator", () => {
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display a grid of quotes", async () => {
    render(<App />);
    expect(
      await screen.findByText("Hi, Super Nintendo Chalmers!")
    ).toBeInTheDocument();
  });
});
