import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { wait } from '@testing-library/user-event/dist/utils';

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
