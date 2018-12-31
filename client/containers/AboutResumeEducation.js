import { connect } from 'react-redux';
import { changeActiveItem } from '../actions';
import ResumeEducation from '../components/Modals/AboutSubComponents/ResumeEducation';

const mapStateToProps = ({ Self }) => ({
  educations: Self.educations,
});

const mapDispatchToProps = dispatch => ({
  changeActiveItem: item => dispatch(changeActiveItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeEducation)
