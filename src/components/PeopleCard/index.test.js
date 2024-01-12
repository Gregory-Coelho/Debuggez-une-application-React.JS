import { render, screen } from "@testing-library/react";
import PeopleCard from "./index";

describe("When a people card is created", () => {
  it("an image is display with alt value", () => {
    render(
      <PeopleCard imageSrc="http://src-image" imageAlt="image-alt-text"
        name="test name"
        position="test position" />
    );
    const imageElement = screen.getByTestId("card-image-testid");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("image-alt-text");
  });
  // test sur le rendu conditionnel du nom
  it("renders the name when the 'name' prop is provided", () => {
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    const nameElement = screen.getByText(/test name/);
    expect(nameElement).toBeInTheDocument();
  });
  it("a title and a month are displayed", () => {
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    const nameElement = screen.getByText(/test name/);
    const titleElement = screen.getByText(/test position/);
    expect(nameElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
