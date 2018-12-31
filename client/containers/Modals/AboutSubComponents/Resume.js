import { connect } from 'react-redux';
import { changeActiveItem } from '../../../actions';
import Resume from '../../../components/Modals/AboutSubComponents/Resume';

const mapStateToProps = ({ Rendering }) => ({
  activeMenu: Rendering.resumeActiveMenu,
});

const mapDispatchToProps = dispatch => ({
  changeActiveItem: item => dispatch(changeActiveItem(item)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(Resume);
