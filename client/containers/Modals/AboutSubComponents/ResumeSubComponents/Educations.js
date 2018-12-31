import { connect } from 'react-redux';
import { changeActiveItem } from '../../../../actions';
import Educations from '../../../../components/Modals/AboutSubComponents/ResumeSubComponents/Educations';

const mapStateToProps = ({ Self }) => ({
  educations: Self.educations,
});

const mapDispatchToProps = dispatch => ({
  changeActiveItem: item => dispatch(changeActiveItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Educations)
