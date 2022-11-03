import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MatchMediaMock from 'jest-matchmedia-mock';
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";


let matchMedia;

describe("Given a Modal component", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

   afterEach(() => {
    matchMedia.clear();
  });

  describe("When it's rendered a icon", () => {
    test("It should render action click", () => {

      const dataTest = "Xmark";
      const show = jest.fn()

      render(
       <BrowserRouter>
        <Modal setShow={show}/>
       </BrowserRouter>
      );

      const foundElement = screen.queryByTestId(dataTest);
      userEvent.click(foundElement)
      expect(show).toHaveBeenCalledTimes(1)
    });
  });

  describe("When it's rendered buttons", () => {
    test("It should render action click", () => {

      render(
       <BrowserRouter>
        <Modal />
       </BrowserRouter>
      );

        const light = screen.getByRole("button", {name: "light"})
        const night = screen.getByRole("button", {name: "night"})
        const dark = screen.getByRole("button", {name: "dark"})
    
        userEvent.click(light)
        userEvent.click(dark)
        userEvent.click(night)

        expect(light).toBeInTheDocument()
        expect(dark).toBeInTheDocument()
        expect(night).toBeInTheDocument()
    });
  });

  describe("When it's rendered total buttons", () => {
    test("It should render 3 buttons", async () => {

      render(
       <BrowserRouter>
        <Modal />
       </BrowserRouter>
      );

      const button = await screen.findAllByRole("button")
      for(let i = 0; i < button.length; i++){
        userEvent.click(button[i])
        expect(button).toHaveLength(3)
      }
    });
  });
});
