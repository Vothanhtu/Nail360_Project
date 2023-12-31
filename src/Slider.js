import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'Banner.svg',
    key: 1,
  },
  {
    src:'Banner.svg',
    key: 2,
  },
  {
    src:'Banner.svg',
    key: 3,
  },
  {
    src:'Banner.svg',
    key: 4,
  }
];

function MySlider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item,index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index+1}
      >
        <img className='w-100 img-border' src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={''}
          captionHeader={''}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel className='section-wrap mx-center p-slider'
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators className='dot'
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
    </Carousel>
  );
}

export default MySlider;