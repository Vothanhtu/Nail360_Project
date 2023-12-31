import React,{useState} from 'react'
import './SalonBooking.css';
export default function SalonBooking({ handleCloseBookingPopup, handleSubmitBookingPopup }) {
    
    return (
        <div className='salon-booking__container'>
            <div className="salon-booking__popup">
                    <div className="salon-booking__popup--header">
                        <h2>Add Guest</h2>
                        <svg onClick={handleCloseBookingPopup} className='popup-close-btn' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </div>
                    <div className="popup-content">
                        <input className='content-firstname' type="text" placeholder='First Name' />
                        <input className='content-lastname' type="text" placeholder='Last Name' />
                        <input className='content-date' type="date" placeholder='5/04/2023' />
                        <h3>Please provide the name of the guest and the date of the booking.</h3>
                    </div>
                <button onClick={handleSubmitBookingPopup} className='salon-booking__btn--submit'>Submit</button>
            </div>
        
        </div>
  )
}
