import { connect } from 'react-redux';
import { changeActiveItem } from '../actions';
import ResumeSkill from '../components/Modals/AboutSubComponents/ResumeSkill';

const mapStateToProps = ({ Self }) => ({
  skills: Self.skills,
});

const mapDispatchToProps = dispatch => ({
  changeActiveItem: item => dispatch(changeActiveItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeSkill)
