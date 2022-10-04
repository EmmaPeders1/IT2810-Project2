import React from 'react';
import renderer from 'react-test-renderer';
import Button from './components/Button';
import App from './App';

test('<Button className="search-button"/> renders correctly', () => {
  const tree = renderer.create(
    <Button onClick={function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error('Function not implemented.');
    }}
    className="search-button"></Button>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

test('<Button className="user-filter-button"/> renders correctly', () => {
  const tree = renderer.create(
    <Button onClick={function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error('Function not implemented.');
    }}
    className="user-filter-button"></Button>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

test('<Button className="commit-filter-button"/> renders correctly', () => {
  const tree = renderer.create(
    <Button onClick={function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error('Function not implemented.');
    }}
    className="commit-filter-button"></Button>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

test('<Button className="issue-filter-button"/> renders correctly', () => {
  const tree = renderer.create(
    <Button onClick={function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      throw new Error('Function not implemented.');
    }}
    className="issue-filter-button"></Button>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});
