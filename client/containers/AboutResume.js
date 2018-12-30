import { connect } from 'react-redux';
import Resume from '../components/Modals/AboutSubComponents/Resume';

const mapStateToProps = ({ Self }) => ({
  experiences: Self.experiences,
  educations: Self.educations,
  skills: Self.skills, 
});

export default connect (
  mapStateToProps,
  null,
)(Resume);
