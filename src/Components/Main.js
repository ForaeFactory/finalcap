import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking';



function Main() {



  // const [times, setTimes] = useState(availableTimes)

  // // const reducer = (bookingTimes, action) => {
  // //   return state
  // // };

  // // const [bookingTimes, setBookingTimes] = useState([]);

  // //
  // // const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];



  // const [times, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
    </Routes>
  )
}

export default Main
