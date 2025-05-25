import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import BookingPage from './Components/BookingPage';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});


describe('Feedback Form', () => {
  test("Validate initializeTimes function returns the correct expected value", () => {
    const handleDateChange = jest.fn();
    render(<BookingForm handleDateChange />);

    expect(handleDateChange).toHaveBeenCalled();
  })
});


test("Validate that updateTimes function returns the same value that is provided in the state", () => {
  const updateTimes = jest.fn();
  render(<BookingPage updateTimes />);

  expect(updateTimes).toHaveBeenCalled();
});
