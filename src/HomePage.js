import React from 'react';
import Slider from './Slider';
import MainArea from './MainArea';
import MainRating from './MainRating';
import Banner from './Banner';
import FavoritesSalon from './FavoritesSalon';
import './Slider.css';
import data from './data.json' 
export default function HomePage(props) {

  return (
    <div>

    <div className='bg-slider App'>
      <Slider />
</div>
    <MainArea componentUpdate={props.componentUpdate} isLogin={props.isLogin} data={data} />
          {
            props.isLogin ? <FavoritesSalon/>
              : null
          }
  
          <MainRating data={data}/>
  
  
          <Banner />
    </div>
    
  )
}
