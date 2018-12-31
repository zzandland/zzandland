import { connect } from 'react-redux';
import { changeActiveItem } from '../../../../actions';
import Skills from '../../../../components/Modals/AboutSubComponents/ResumeSubComponents/Skills';

const mapStateToProps = ({ Self }) => ({
  skills: Self.skills,
});

const mapDispatchToProps = dispatch => ({
  changeActiveItem: item => dispatch(changeActiveItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Skills)
