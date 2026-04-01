import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders Hello, Jenkins!', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello, Jenkins!/i);
  expect(textElement).toBeInTheDocument();
});