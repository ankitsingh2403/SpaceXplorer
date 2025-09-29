import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BrowseLaunches from "./BrowseLaunches";

// Clear localStorage before each test
beforeEach(() => {
  localStorage.clear();
});

describe("BrowseLaunches Component", () => {

  // 1️⃣ Rendering and filtering the list
  test("renders launches and filters correctly", () => {
    render(<BrowseLaunches />);

    // Initial launches
    expect(screen.getByText("Falcon 9")).toBeInTheDocument();
    expect(screen.getByText("Starship")).toBeInTheDocument();
    expect(screen.getByText("Falcon Heavy")).toBeInTheDocument();

    // Filter
    const searchInput = screen.getByPlaceholderText("Search launches");
    fireEvent.change(searchInput, { target: { value: "falcon" } });

    // Only Falcon launches remain
    expect(screen.getByText("Falcon 9")).toBeInTheDocument();
    expect(screen.getByText("Falcon Heavy")).toBeInTheDocument();
    expect(screen.queryByText("Starship")).not.toBeInTheDocument();
  });

  // 2️⃣ Favorites toggle and persistence
  test("favorites toggle works and persists to localStorage", () => {
    render(<BrowseLaunches />);
    const favButton = screen.getAllByText("☆")[0]; // First launch favorite button

    // Add to favorites
    fireEvent.click(favButton);
    expect(favButton.textContent).toBe("★");

    // Check localStorage
    const favs = JSON.parse(localStorage.getItem("favorites"));
    expect(favs).toContain(1); // Assuming first launch id = 1

    // Remove from favorites
    fireEvent.click(favButton);
    expect(favButton.textContent).toBe("☆");
    expect(JSON.parse(localStorage.getItem("favorites"))).not.toContain(1);
  });

  // 3️⃣ Detail view rendering
  test("renders launch detail view when clicking Details button", () => {
    render(<BrowseLaunches />);
    const detailsButton = screen.getAllByText("Details")[0]; // First launch

    fireEvent.click(detailsButton);

    expect(screen.getByTestId("detail-view")).toBeInTheDocument();
    expect(screen.getByText("Falcon 9")).toBeInTheDocument();
    expect(screen.getByText("Reusable rocket")).toBeInTheDocument();
  });

});
