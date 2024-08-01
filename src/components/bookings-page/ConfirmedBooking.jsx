import React from 'react'
import './Styles.css'

function ConfirmedBooking() {
  return (
    <section id='confirmed-booking'>
        <img src={require('../../icons_assets/reservation-confirmed.png')} alt="Confirmed" />
        <div className="msg">
            <p className="thanks-msg"><i>Thank you for your reservation at:</i></p> 
            <h1 className='restaurant-name'>Little Lemon</h1> <img className='smiling-icon' src={require('../../icons_assets/smiling-emoji.png')} alt="Smiling-icon" width='15px' /> <br /> <br />
            <p>We are looking forward to your visit and hope you will have the best dining experience with us.</p>
        </div>
    </section>
  )
}

export default ConfirmedBooking