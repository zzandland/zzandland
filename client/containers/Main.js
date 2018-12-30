import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';
import Main from '../components/Main';

const mapStateToProps = ({ Modal }) => ({
  modalType: Modal.modalType,
  modalProps: Modal.modalProps,
});

const mapDispatchToProps = dispatch => ({
  showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
  hideModal: () => dispatch(hideModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
