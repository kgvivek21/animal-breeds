import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Breed from "./Breed";
import { capitaliseFirstLetter } from "@/utils/utils";

describe("Breed", () => {
  it("renders a Dog name with two words and desc", () => {
    render(<Breed dogName="boston bulldog" />);

    const dogName = screen.getByText(capitaliseFirstLetter("boston bulldog"));
    const dogDesc = screen.getByRole("dogDesc");

    expect(dogName).toBeInTheDocument();
    expect(dogDesc).toBeInTheDocument();
  });

  it("renders a Dog name with one word and desc", () => {
    render(<Breed dogName="beagle" />);

    const dogName = screen.getByText(capitaliseFirstLetter("beagle"));
    const dogDesc = screen.getByRole("dogDesc");

    expect(dogName).toBeInTheDocument();
    expect(dogDesc).toBeInTheDocument();
  });
});
