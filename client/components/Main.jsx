import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import ModalRoot from '../containers/ModalRoot';

export default ({ showModal }) => (
  <div id="bl-main" className="bl-main">
    <Intro />
    <About onClick={() => showModal('about', { open: true })} />
    <Portfolio onClick={() => showModal('portfolio', { open: true })} />
    <Contacts onClick={() => showModal('contacts', { open: true })} />
    <ModalRoot />
  </div>
);
