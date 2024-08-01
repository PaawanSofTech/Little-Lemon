import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const PersonlDetails = ({userInfo: {date, time, guests, occasion}}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(firstName, lastName,email,phoneNumber,specialRequest);
        navigate('/confirmed-booking');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="left-form">
                    <div className='left-inputs-container'>
                        <div className="form-input">
                            <div>
                                <label htmlFor='first-name'>First Name</label>
                            </div>
                            <input type="text" id='first-name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                        </div>
                        <div className="form-input">
                            <label htmlFor='email'>Email</label>
                            <input type="email" id='email' placeholder='example@ex.com' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="booking-info">
                        <div>
                            <p>{date ? date : 'Date'}</p>
                            <p>{guests ? `${guests} Guests` : 'Guests'}</p>
                        </div>
                        <div>
                            <p>{time ? `At ${time}` : 'Time'}</p>
                            <p>{occasion ? `Occasion:  ${occasion}` : 'Occasion'}</p>
                        </div>
                    </div>
                </div>

                <div className="right-form">
                    <div className='right-inputs-container'>
                        <div className="form-input">
                            <label htmlFor='first-name'>Last Name</label>
                            <input type="text" id='last-name' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                        <div className="form-input">
                            <label htmlFor='phone-number'>Phone Numbers</label>
                            <input type="tel" id='phone-number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                        </div>
                    </div>
                
                    <div>
                        <p>Special Requests</p>
                        <textarea rows={5} className='requests' cols={45} value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)}/>
                    </div>
                </div>
            </div>
            
            <div className="submit-button-container">
                <input type="submit" value='Confirm Reservation' className='button booking-form-button' />
            </div>
        </form>
    </div>
  )
}

export default PersonlDetails