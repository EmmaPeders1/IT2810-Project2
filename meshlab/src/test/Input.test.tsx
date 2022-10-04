import { fireEvent, getByTestId, render } from "@testing-library/react";
import React from 'react';
import App from "../App";

test('Check if input field gets value', () => {

  const {container} = render(<App />);
  const input = getByTestId(container,'search-input');
  expect(input).toHaveValue('');
  fireEvent.change(input, {
    target: {value: 'Hello'},
  });

  expect(input).toHaveValue('Hello');

})