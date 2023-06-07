import React from 'react';
import Slider from 'react-slick';

const AucklandSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs here
  ];

  return (
    <div>
      <h2>Auckland Image Slider</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Auckland ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AucklandSlider;
