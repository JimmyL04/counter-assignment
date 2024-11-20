import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'; 

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const message = screen.getByText(/counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByText('0');
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+'); 
  fireEvent.click(incrementButton);
  const updatedCount = screen.getByText('1'); 
  expect(updatedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-'); 
  fireEvent.click(decrementButton);
  const updatedCount = screen.getByText('-1'); 
  expect(updatedCount).toBeInTheDocument();
});
