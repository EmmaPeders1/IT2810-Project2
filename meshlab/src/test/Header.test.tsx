import { render } from "@testing-library/react";
import React from 'react';
import Header from "../components/Header";

test('Check if header is not empty', () => {
  const {container} = render(<Header />);
  expect(container).toBeInTheDocument();
})