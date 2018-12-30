import React from 'react';
import ContactsInfo from './ContactsInfo';
import ContactsForm from './ContactsForm';

export default ({ closeModal }) => (
  <section className="bl-expand bl-expand-top">
    <div className="bl-content">
      <div className="container page-title center-align">
        <h2 className="center-align">
          <span className="span-spacing span-heading" data-hover="get">get</span>
          <span data-hover="in touch">in touch</span>
        </h2>
      </div>
      <div className="container">
        <div className="divider center-align">
            <span className="outer-line"></span>
            <span className="fa fa-envelope-open" aria-hidden="true"></span>
            <span className="outer-line"></span>
        </div>
        <div className="row contact section-padding">
          <ContactsInfo />
          <ContactsForm />
        </div>
      </div>
    </div>
    <img onClick={closeModal} alt="close" src="images/close-button.png" className="bl-icon-close" />
  </section>
)
