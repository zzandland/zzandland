import { connect } from 'react-redux';
import Info from '../../../../components/Modals/PortfolioSubComponents/DetailsSubComponent/Info';

const mapStateToProps = ({ Modal }) => ({
  title: Modal.modalProps.title,
  client: Modal.modalProps.client,
  startDate: Modal.modalProps.start_date,
  endDate: Modal.modalProps.end_date,
  usedTech: Modal.modalProps.used_tech,
  link: Modal.modalProps.hyper_link,
});

export default connect(
  mapStateToProps,
  null,
)(Info)
