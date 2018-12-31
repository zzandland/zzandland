import React from 'react';

export default ({ images }) => (
  <div className="col s12 l6 xl6 section-padding section-padding-right-none">
    <div className="carousel carousel-slider">
      {images.map(image => (
        <a className="carousel-item" href="#one!">
          <img className="responsive-img" src={image} alt="project" />
        </a>
      ))}
      <a className="carousel-item" href="#two!"><img className="responsive-img" src="http://via.placeholder.com/535x400" alt="project" /></a>
      <a className="carousel-item" href="#three!"><img className="responsive-img" src="http://via.placeholder.com/535x400" alt="project" /></a>
      <a className="carousel-item" href="#four!"><img className="responsive-img" src="http://via.placeholder.com/535x400" alt="project" /></a>
    </div>
  </div>
)
