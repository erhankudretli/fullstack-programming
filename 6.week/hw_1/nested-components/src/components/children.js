import React from "react";
export default function Children(props) {
  return (
    <div className="children">
      <h3>Children</h3>
      {props.childrenInfo.map((child) => (
        <div>
          <img src={child.avatar} />
          <p>Firstname: {child.firstName}</p>
          <p>Gender: {child.gender}</p>
          <p>Birthday: {child.birthday}</p>
        </div>
      ))}
    </div>
  );
}


// h3 taginin testi
test("test h3 tag ", () => {
  render(<Children />);
  const headElement = screen.getByRole("heading");
  expect(headElement).toBeInTheDocument();
});

// heading class inin testi
test("test head element have class", () => {
  render(<Children />);
  const headElement = screen.getByRole("heading");
  expect(headElement).toHaveClass("heading");
});

// text  testi
test('test "Children" to be in the document', () => {
  render(<Children />);
  screen.debug();
  expect(screen.getByText("Children")).toBeInTheDocument();
});