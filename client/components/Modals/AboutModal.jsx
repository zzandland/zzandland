import React from 'react';
import Info from './AboutSubComponents/Info';
import Resume from '../../containers/Modals/AboutSubComponents/Resume';
import FunFacts from './AboutSubComponents/FunFacts';

export default ({ closeModal }) => (
  <section className="bl-expand bl-expand-top">
    <div className="bl-content">
      <div className="container page-title custom-page-title">
        <h2 className="center-align">
          <span className="span-spacing span-heading">About</span>
          <span>Me</span>
        </h2>
      </div>
      <Info />
      <Resume />
      <FunFacts />
    </div>
    <img onClick={closeModal} alt="close" src="images/close-button.png" className="bl-icon-close" />
  </section>
)
