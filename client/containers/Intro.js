import { connect } from 'react-redux';
import { changeRoleTitle } from '../actions';
import Intro from '../components/Intro';

const mapStateToProps = ({ Intro }) => ({
  roleTitle: Intro.roleTitle,
});

const mapDispatchToProps = dispatch => ({
  changeRoleTitle: roleTitle => dispatch(changeRoleTitle(roleTitle)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Intro);
