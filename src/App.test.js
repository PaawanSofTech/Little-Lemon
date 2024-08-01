import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/bookings-page/BookingForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });w

test('there is a section for reserving a table', () => {
  render(<BookingForm />);

  const heading = screen.getByTestId('heading');

  expect(heading).toHaveTextContent('Reserve a table');
})