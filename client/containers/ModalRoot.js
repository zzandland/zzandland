import { connect } from 'react-redux';
import ModalRoot from '../components/ModalRoot';
import { showModal, hideModal } from '../actions';

const mapStateToProps = (state) => ({
  ...state.Modal
})

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()), 
  closeDetailsModal: () => dispatch(showModal('portfolio', { open: true })),
})

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(ModalRoot)
