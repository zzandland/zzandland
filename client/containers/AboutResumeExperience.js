import { connect } from 'react-redux';
import { changeActiveItem } from '../actions';
import ResumeExperience from '../components/Modals/AboutSubComponents/ResumeExperience';

const mapStateToProps = ({ Self }) => ({
  experiences: Self.experiences,
});

const mapDispatchToProps = dispatch => ({
  changeActiveItem: item => dispatch(changeActiveItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeExperience)
