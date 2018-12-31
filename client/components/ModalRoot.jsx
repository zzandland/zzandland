import React, { Component } from 'react';
import Modal from 'react-modal';
import AboutModal from './Modals/AboutModal';
import PortfolioModal from '../containers/Modals/PortfolioModal';
import ContactsModal from './Modals/ContactsModal';
import DetailsModal from './Modals/PortfolioSubComponents/DetailsModal';

class ModalRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open,
      })
    }
  }

  closeModal() {
    const { hideModal, closeDetailsModal, modalType } = this.props;
    if (modalType === 'details') {
      closeDetailsModal();
    } else {
      hideModal();
      this.setState({ modalIsOpen: false });
    }
  }

  render() {
    const { modalType, modalProps } = this.props;
    const { modalIsOpen } = this.state;
    if (!modalType) {
      return null;
    } else {
      let SpecificModal;
      if (modalType === 'about') {
        SpecificModal = <AboutModal closeModal={() => this.closeModal()} />;
      } else if (modalType === 'portfolio') {
        SpecificModal = <PortfolioModal closeModal={() => this.closeModal()} />;
      } else if (modalType === 'contacts') {
        SpecificModal = <ContactsModal closeModal={() => this.closeModal()} />;
      } else if (modalType === 'details') {
        SpecificModal = (<DetailsModal 
          project={modalProps} 
          closeModal={() => this.closeModal()}
        />);
      }
      return (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => { this.closeModal() }}
            shouldCloseOnOverlayClick={false}
            ariaHideApp={false}
            className={"react-modal bl-main"}
            overlayClassName={"react-modal-overlay"}
          >
            { SpecificModal }
          </Modal>
        </div>
      );
  }
    }
}

export default ModalRoot;
