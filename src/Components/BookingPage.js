import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function (formData) {
    return true;
};




function BookingPage() {

    const navigate = useNavigate();

    function initializeTimes() {
        return (
            fetchAPI(new Date()))
    }

    function updateTimes(state, action) {
        console.log("state: " + state)
        console.log("action: " + action);
        setDate(action)
        return (
            fetchAPI(new Date(action))
        )
    }

    const [date, setDate] = useState('')

    const [times, dispatch] = useReducer(updateTimes, initializeTimes);

    console.log('New state: ' + times)
    console.log(date)

    function submitForm(data) {
        if (submitAPI(data) === true) {
            navigate('/confirmed')
        } else {
            console.log('Nah Son')
        }
    }


    return (
        <BookingForm date={date} times={times} dispatch={dispatch} onSubmit={submitForm} />
    )
}

export default BookingPage
