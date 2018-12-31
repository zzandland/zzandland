import React from 'react';
import Carousel from '../../../containers/Modals/PortfolioSubComponents/DetailsSubComponent/Carousel';
import Info from '../../../containers/Modals/PortfolioSubComponents/DetailsSubComponent/Info';

export default ({ project, closeModal }) => {
  return (
    <div className="bl-panel-items bl-panel-items-show" id="bl-panel-work-items">
      <div className="bl-show-work">
        <div className="row">
          <Carousel images={project.images} />
          <Info info={project} />
        </div>
      </div>
      <nav>
        <span className="control-button bl-previous-work"><i className="fas fa-angle-left"></i></span>
        <img
          onClick={() => closeModal()}
          alt="close" 
          src="images/close-button.png" 
          className="control-button bl-icon-close" 
        />
        <span className="control-button bl-next-work"><i className="fas fa-angle-right"></i></span>
      </nav>
    </div>
  );
}
