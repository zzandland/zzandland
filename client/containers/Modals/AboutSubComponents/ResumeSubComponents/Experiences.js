import { connect } from 'react-redux';
import { changeActiveItem } from '../../../../actions';
import Experiences from '../../../../components/Modals/AboutSubComponents/ResumeSubComponents/Experiences';

const mapStateToProps = ({ Self }) => ({
  experiences: Self.experiences,
});

const mapDispatchToProps = dispatch => ({
  changeActiveItem: item => dispatch(changeActiveItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Experiences)
