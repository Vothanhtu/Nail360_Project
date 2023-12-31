import React, { useEffect, useState } from 'react';
import {FaHeart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './FavoritesSalon.css';
function FavoritesSalon() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
	[ 
		{
		src: 'imageSalon1.svg',
		avtSalon:'avt-favoritesSalons.svg',
		altText: 'Slide 1',
		caption: 'Warren Tricomi',
		key: 1,
	  },
	  {
		src: 'imageSalon2.svg',
		avtSalon:'avt-favoritesSalon.svg',
		altText: 'Slide 2',
		caption: 'Lathersalonaspen',
		key: 2,
	  },
	  {
		src: 'imageSalon2.svg',
		avtSalon:'avt-favoritesSalon.svg',
		altText: 'Slide 3',
		caption: 'Warren Tricomi',
		key: 3,
	  },
	  {
		src: 'imageSalon2.svg',
		avtSalon:'avt-favoritesSalon.svg',
		altText: 'Slide 4',
		caption: 'Lathersalonaspen',
		key: 4,
	  },
	  {
		src: 'imageSalon2.svg',
		avtSalon:'avt-favoritesSalon.svg',
		altText: 'Slide 5',
		caption: 'Warren Tricomi',
		key:5,
	  }
	]
];
 
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (

    <div className='salon-wrapper mx-center section-wrap p-5 '>
		
		<div className='d-flex justify-content-between align-items-center'>
				<h1 className='title-favorites-salon'>Favorite Salons</h1>
				<div className='flex-slide'>
				<svg aria-hidden="true" onClick={prevSlide} data-prefix="fal" data-icon="long-arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fa-long-arrow-left "><path fill="currentColor" d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
				<svg aria-hidden="true" onClick={nextSlide} data-prefix="fal" data-icon="long-arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fa-long-arrow-right"><path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg>
				</div>
	  	</div>
      <div className="grid-container ">
	  <div className='left-column position-relative'>
	  				<FaHeart className='favorites__heart-icon'/>
					<img alt='large-image' src={slides[currentSlide][0].src} className='large-image'></img>
					<div className='name-salon-wraper'>
						<Link to = '/salondetail'>
						<button className="name-salon">
						<img src='avt-favoritesSalon.svg' alt="Avatar Favourites Salon" />
							{slides[currentSlide][0].caption}</button></Link>
					</div>					
        </div>
		<div className='right-column'>
			{
			slides[currentSlide].map((item,index)=>
				index === 0 ? null :
				<div className="small-image--container" key={index}>
					<FaHeart className='favorites__heart-icon'/>
					<img alt='small-image' src={item.src} className='small-image '></img>
					<div className='name-salon-wraper'>
					<Link to = '/salondetail'>
						<button className="name-salon">
						<img src={item.avtSalon} alt="Avatar Favourites Salon" />
						{item.caption}</button> </Link>
					</div>
				</div>
			)}
	  </div>
      </div>

    </div>

  );
}

export default FavoritesSalon;
