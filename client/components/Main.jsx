import React, { Component } from 'react';
import Intro from '../containers/Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import ModalRoot from '../containers/ModalRoot';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  openContactsModal(event) {
    const { showModal } = this.props;
    showModal('contacts', {
      open: true,
    });
  }

  render() {
    return (
      <div id="bl-main" class="bl-main">
        <Intro />
        <About />
        <Portfolio />
        <Contacts onClick={() => { this.openContactsModal() }}/>
        <ModalRoot />
      </div>
    );
  }
}

export default Main;
