import React, { useState } from 'react';
import './Styles.css';
import BookingForm from './BookingForm';
import PersonlDetails from './PersonlDetails';

function BookingPage(props) {
  const [bookingStage, setBookingStage] = useState(false);

  return (
    <>
        <section id='booking'>
          {bookingStage ? <PersonlDetails userInfo={props.userInfo} /> : 
              <BookingForm availableTimes={props.times} dispatch={props.dispatchs} formSubmit={props.form} setBookingStage={setBookingStage} />}
        </section>
        <section id="restaurant-display">
            <img className='' src={require('../../icons_assets/restaurant-chef-b.webp')} alt='Resturant waiter holding food' />
            <img className='' src={require('../../icons_assets/mario-and-adrian.webp')} alt='Resturant waiter holding food' />
            <img className='' src={require('../../icons_assets/restaurant.webp')} alt='Resturant waiter holding food' />
        </section>
    </>
  )
}

export default BookingPage