import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Home", () => {
  it("renders Pagination with data", () => {
    const clickEvent = jest.fn();
    render(
      <Pagination
        currentPageData={["Beagle", "Bluetick"]}
        currentPage={1}
        totalPage={2}
        clickEvent={clickEvent}
      />
    );

    const pageText = screen.getByText("Showing 1 of 2");
    const buttons = screen.getAllByRole("buttons");

    expect(pageText).toBeInTheDocument();
    buttons.map((button) => {
      switch (button.textContent) {
        case "First":
          expect(button).toBeInTheDocument();
          expect(button).toHaveAttribute("disabled");
          fireEvent.click(button);
          expect(clickEvent).toHaveBeenCalledTimes(0);
          break;
        case "Previous":
          expect(button).toBeInTheDocument();
          expect(button).toHaveAttribute("disabled");
          fireEvent.click(button);
          expect(clickEvent).toHaveBeenCalledTimes(0);
          break;
        case "Next":
          expect(button).toBeInTheDocument();
          expect(button).not.toBeDisabled();
          fireEvent.click(button);
          expect(clickEvent).toHaveBeenCalledTimes(1);
          break;
        case "Last":
          expect(button).toBeInTheDocument();
          fireEvent.click(button);
          expect(clickEvent).toHaveBeenCalledTimes(2);
          break;
        default:
          expect(button).toBeInTheDocument();
          break;
      }
    });
  });

  it("renders Pagination without data", () => {
    const clickEvent = jest.fn();
    render(
      <Pagination
        currentPageData={[]}
        currentPage={0}
        totalPage={0}
        clickEvent={clickEvent}
      />
    );

    const pageText = screen.getByText("Showing 0 of 0");

    expect(pageText).toBeInTheDocument();
  });
});
