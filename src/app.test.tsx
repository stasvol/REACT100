import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './app';

test('renders learn react link', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
