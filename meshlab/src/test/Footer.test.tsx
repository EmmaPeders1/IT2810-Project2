import { render } from "@testing-library/react";
import React from 'react';
import Footer from "../components/Footer";

test('Check if header is not empty', () => {
  const {container} = render(<Footer />);
  expect(container).toBeInTheDocument();
})