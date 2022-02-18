import React from 'react';
import { render, screen } from '@testing-library/react';

import MyApp from '../../myApp';

test('renders learn react link', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
