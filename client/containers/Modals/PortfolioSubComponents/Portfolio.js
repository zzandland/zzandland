import { connect } from 'react-redux';
import { showModal } from '../../../actions';
import Portfolio from '../../../components/Modals/PortfolioSubComponents/Portfolio';

const mapStateToProps = ({ Modal }) => ({
  modalType: Modal.modalType,
  modalProps: Modal.modalProps,
});

const mapDispatchToProps = dispatch => ({
  showModal: (modalType, modalProps) => dispatch(showModal(modalType, modalProps)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Portfolio)
