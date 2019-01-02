import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';
import { initializeBio } from '../actions';

const mapStateToProps = ({ Self }) => ({
  bio: Self, 
});

const mapDispatchToProps = dispatch => ({
  initializeBio: () => dispatch(initializeBio()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);
