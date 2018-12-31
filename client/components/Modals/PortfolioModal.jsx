import React from 'react';
import Portfolio from '../../containers/Modals/PortfolioSubComponents/Portfolio';

export default ({ closeModal, portfolios }) => (
  <section className="bl-expand bl-expand-top">
    <div className="container page-title center-align">
      <h2 className="center-align">
        <span className="span-spacing span-heading" data-hover="my">my </span>
        <span data-hover="portfolio">portfolio</span>
      </h2>
    </div>
    <div className="divider center-align">
      <span className="outer-line"></span>
      <span className="fa fa-suitcase" aria-hidden="true"></span>
      <span className="outer-line"></span>
    </div>
    <div className="row center-align da-thumbs" id="bl-work-items">
      {portfolios.map(portfolio => <Portfolio portfolio={portfolio} />)}
    </div>
    <img onClick={closeModal} alt="close" src="images/close-button.png" className="bl-icon-close" />
  </section>
)
