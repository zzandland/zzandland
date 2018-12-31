import { connect } from 'react-redux';
import Info from '../../../../components/Modals/PortfolioSubComponents/DetailsSubComponent/Info';

const mapStateToProps = ({ Modal }) => ({
  title: Modal.modalProps.title,
  client: Modal.modalProps.client,
  startDate: Modal.modalProps.startDate,
  endDate: Modal.modalProps.endDate,
  usedTech: Modal.modalProps.usedTech,
  link: Modal.modalProps.link,
});

export default connect(
  mapStateToProps,
  null,
)(Info)
