// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "./Spinner";

test("sanity", () => {
  expect(true).toBe(true);
});

describe("Spinner Component", () => {
  test("renders nothing when 'on' prop is false", () => {
    const { container } = render(<Spinner on={false} />);
    expect(container.firstChild).toBeNull();
  });

  test("renders spinner with text when 'on' prop is true", () => {
    render(<Spinner on={true} />);
    const spinnerElement = screen.getByText("Please wait...");
    expect(spinnerElement).toBeInTheDocument();
    expect(screen.getByText(".")).toBeInTheDocument();
  });
});
