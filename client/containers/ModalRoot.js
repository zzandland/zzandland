import { connect } from 'react-redux';
import ModalRoot from '../components/ModalRoot';
import { hideModal } from '../actions';

const mapStateToProps = (state) => ({
  ...state.Modal
})

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()), 
})

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(ModalRoot)
