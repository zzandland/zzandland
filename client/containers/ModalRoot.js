import { connect } from 'react-redux';
import ModalRoot from '../components/ModalRoot';

const mapStateToProps = (state) => ({
  ...state.Modal
})

export default connect (
  mapStateToProps,
  null,
)(ModalRoot)
