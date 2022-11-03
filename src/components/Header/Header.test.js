import { render, screen } from "@testing-library/react";
import HeaderContainer from "./Header";
import MatchMediaMock from 'jest-matchmedia-mock';
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

let matchMedia;

describe("Given a Header component", () => {
   beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

   afterEach(() => {
    matchMedia.clear();
  });
  describe("When it receives an image", () => {
    test("It should render the image with alt text profile pfp", () => {

      render(
       <BrowserRouter>
        <HeaderContainer />
       </BrowserRouter>
      );

        const altText = screen.getByAltText("profile pfp");
        expect(altText).toBeInTheDocument();
    });
  });

   describe("When it receives an icon", () => {
    test("It should render action click", () => {
      const dataTest = "Gear";

      render(
       <BrowserRouter>
        <HeaderContainer />
       </BrowserRouter>
      );

      const foundElement = screen.queryByTestId(dataTest);
      userEvent.click(foundElement)
      expect(foundElement).toBeInTheDocument();
    });
  });
});
