import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

var list = require('./quotes.json')

test('renders a quote from the list', () => {
  const { queryByText } = render(<App />);
  let linkElement = null;
  let i = 0;
  do {
    linkElement = queryByText(new RegExp(list.quotes[i].quote),"i");
    i++
  }while (linkElement === null && i < list.quotes.length)
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 quotes authors from the list', () => {
  const { queryByText } = render(<App />);
  let linkElement = null;
  let i = 0;
  let count = 0;
  do {
    linkElement = queryByText(new RegExp(list.quotes[i].author),"i");
    if (linkElement){
      count++
    }
    i++
  }while (i < list.quotes.length)
  expect(count).toBeGreaterThanOrEqual(3);
});