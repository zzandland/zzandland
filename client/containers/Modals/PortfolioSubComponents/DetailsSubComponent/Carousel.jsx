import { connect } from 'react-redux';
import Carousel from '../../../../components/Modals/PortfolioSubComponents/DetailsSubComponent/Carousel';

const mapStateToProps = ({ Modal }) => ({
  images: Modal.modalProps.images,
});

export default connect(
  mapStateToProps,
  null,
)(Carousel)
