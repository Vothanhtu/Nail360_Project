import React, { useState } from 'react';
import './MainRating.css';
function MainRating(props) {
  return (
    <div className='section-wrap  mx-center pd-2rem px-rem'>
      <div className='rating-wrap section-wrap mx-center'>
        <h1 className='title-bold'>What Our User Say</h1>
        <p className='pb-4'>Explore on the world's best & largest 
            Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth.</p>
      </div>
      <div className='section-wrap mx-center rating-wrapper '>
          {props.data.slice(0,3).map((rate,index) =>(
            <div  key={index} className='card-rating__container'>
              <div className='card-rating__container--header '>
                <img className='salon-avatar' alt="Sample" src={rate.thumbnail} />
                <div className='salon-description'>
                  <h5 className='card-rating__title'>{rate.name}</h5>
                  <img className='rate-image' alt="Sample" src='ratingStar.svg' />

                </div>            
              </div>
              <div className='card-text-favorites'>
              The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will 
              Elkadi for all the efforts that assisted.
            </div>
            <div className="container-author">
              <img className='author-avatar' alt="Sample" src={rate.avatarimg} />

              <div className='author-description-container'>
                <div className='author-description'>
                  <h2 className='author-name'>Johan Martin</h2>
                  <h2 className='job-author'>CEO</h2>
                </div>
                <img className='quote-green' src="quote-green.svg" alt="" />
              </div>
            </div>
            </div>
          ))}
      </div>



    </div>
  );
}

export default MainRating;

// Tôi muốn tạo 1 button Filter mà khi tôi nhấn vào nó sẽ hiện ra 1 popup bao gồm: 
// + 1 ô input để search by name
// + 1 dạng Filter by Category gồm các ô check 