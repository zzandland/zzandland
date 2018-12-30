import React, { Component } from 'react';
import Modal from 'react-modal';
import ContactsModal from './Modals/ContactsModal';

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
    this.setState({ modalIsOpen: false })
  }

  render() {
    console.log(this.props);
    const { modalType, modalProps } = this.props;
    const { modalIsOpen } = this.state;
    if (!modalType) {
      return null;
    } else {
      let SpecificModal;
          SpecificModal = <ContactsModal closeModal={() => { this.closeModal() }}/>;
      console.log('next');
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
