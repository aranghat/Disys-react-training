import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { wait } from '@testing-library/user-event/dist/utils';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

test('Check if the heading exist', () => {
  let dom = render(<App/>);
  let heading = screen.queryByRole("heading");
  expect(heading).toBeInTheDocument();
});

test('Check heading matches the predefind string', () => {
  let dom = render(<App/>);
  let heading = screen.queryByRole("heading");
  expect(heading).toHaveTextContent("Today's Tasks");
});

test("Check if the button changed the heading", () => {
  let dom = render(<App/>);

  let heading = screen.queryByRole("heading");
  let button = screen.queryByRole("button");
  
  expect(heading).toHaveTextContent("Today's Tasks");
  
  waitFor(() => {fireEvent(button,'click');}).then(() => {
    expect(heading).toHaveTextContent("Tomorrows's Tasks");
  });
  


});

test("check if the list items exist", () => {
  let dom = render(<App/>);
  let items = dom.container.querySelector(".list-group").children;
  expect(items.length).toBe(4);
});

test("check if the list items get deleted", () => {
  let dom = render(<App/>);
  let button = dom.container.querySelector("#btnLastElement");
  
  waitFor(()=> {fireEvent(button,'click');}).then(() => {
    let items = dom.container.querySelector(".list-group").children;
    expect(items.length).toBe(3);
  });

});
