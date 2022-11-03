import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MatchMediaMock from 'jest-matchmedia-mock';
import App from "./App";

let matchMedia;

describe("Given a HomePage component", () => {
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
        <App />
       </BrowserRouter>
      );

        const img = screen.getByRole("img", {name: "profile pfp"});
        expect(img).toBeInTheDocument();
    });
  });
});
