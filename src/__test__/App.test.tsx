import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const el1 = screen.getByText(/с воркерами/i);
  const el2 = screen.getByText(/без воркеров/i);
  expect(el1).toBeInTheDocument();
  expect(el2).toBeInTheDocument();
});
