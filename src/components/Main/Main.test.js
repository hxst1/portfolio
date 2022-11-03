import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainContainer from "./Main";

describe("Given a Main component", () => {
  describe("When it's rendered component", () => {
    test("It should render headings and links", () => {

      render(
       <BrowserRouter>
        <MainContainer />
       </BrowserRouter>
      );

      const AboutMe = screen.getByRole("heading", {name: /About me/i });
      const Skills = screen.getByRole("heading", {name: /Skills/i });
      const LinkedIn = screen.getByRole("link", {name: /LinkedIn/i });
      const DownloadCV = screen.getByRole("link", {name: /Download CV/i });

      expect(AboutMe).toBeInTheDocument();
      expect(Skills).toBeInTheDocument();
      expect(LinkedIn).toBeInTheDocument();
      expect(DownloadCV).toBeInTheDocument();

    });
  });
});
