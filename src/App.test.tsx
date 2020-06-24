import React from 'react';
import { render } from '@testing-library/react';
import AppProvider from './AppProvider';

test('renders learn react link', () => {
  const { getByText } = render(<AppProvider />);
  const linkElement = getByText(/Health Hacker Hub/i);
  expect(linkElement).toBeInTheDocument();
});
