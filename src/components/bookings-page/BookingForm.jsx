import React, { useState } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState(props.availableTimes[0]);
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');


    function getDateObject (dateString) {
        const yyyymmdd = dateString.split("-");
        const dateObj = new Date(parseInt(yyyymmdd[0]), parseInt(yyyymmdd[1]) - 1, parseInt(yyyymmdd[2]));
        return dateObj;
    }

    function isValidDate(dateString) {
        const dateObj = getDateObject(dateString);
        if (dateObj <= new Date())
            return false;
        return true;
    }

    function handleEvent(e) {
        e.preventDefault()
        const reservationInfo = {
            date,
            time,
            guests,
            occasion
        }
        if (!date && !occasion && !guests) return;
        props.formSubmit(reservationInfo);
        props.setBookingStage(true);
    }

    let arr = props.availableTimes;

    function renderDate(e) {
        if (!isValidDate(e.target.value)) {
            alert(`Current date and past dates are not valid, \nPlease choose another date`);
            return;
        }

        const selectedDate = getDateObject(e.target.value)
        setDate(e.target.value)
        props.dispatch({bookingDate: selectedDate})
    }

  return (
        <>
        <h1 data-testid='heading' className='reserve-text'>Reservations</h1>
        <form className='reserve-form' onSubmit={handleEvent}>
            <div className="form-container">
                <div className="left-form">
                    <div className="form-input">
                        <label htmlFor="res-date">Choose date:</label>
                        <input type="date" id="res-date" value={date} onChange={renderDate} required/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="occasion">Occasion:</label>
                        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                            <option></option>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                </div>

                <div className="right-form">
                    <div className="form-input">
                        <label htmlFor="guests">Number of guests:</label>
                        <input type="number" placeholder="0" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="res-time">Choose time:</label>
                        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                            {
                            arr?.map((item, index) => {
                                return (
                                    <option key={index}>{item}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
           
            <div className="submit-button-container">
                <input type="submit" value='Reserve a Table' className='button booking-form-button' />
            </div>
        </form>
        </>
  )
}

export default BookingForm