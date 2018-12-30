import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import ModalRoot from '../containers/ModalRoot';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  openSectionModal(modalType) {
    const { showModal } = this.props;
    showModal(modalType, {
      open: true,
    })
  }

  render() {
    return (
      <div id="bl-main" className="bl-main">
        <Intro />
        <About onClick={() => { this.openSectionModal('about') }} />
        <Portfolio onClick={() => { this.openSectionModal('portfolio') }} />
        <Contacts onClick={() => { this.openSectionModal('contacts') }} />
        <ModalRoot />
      </div>
    );
  }
}

export default Main;
