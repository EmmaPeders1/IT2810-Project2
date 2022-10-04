import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createRenderer } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Button from './components/Button';


it('renders correctly', () => {
  const tree = renderer
    .create(<Button
      onClick={function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error('Function not implemented.');
      } }
      ></Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
