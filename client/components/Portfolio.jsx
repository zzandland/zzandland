import React from 'react';

export default ({ onClick }) => (
  <section onClick={onClick}>
    <div className="bl-box valign-wrapper">
      <div className="page-title center-align">
        <h2 className="center-align">
          <span className="span-spacing" data-hover="my">my</span>
          <span data-hover="portfolio">portfolio</span>
        </h2>
      </div>
    </div>
  </section>
);
