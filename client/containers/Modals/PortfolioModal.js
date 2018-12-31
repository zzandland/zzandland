import { connect } from 'react-redux';
import PortfolioModal from '../../components/Modals/PortfolioModal';

const mapStateToProps = ({ Self }) => ({
  portfolios: Self.portfolios,
});

export default connect(
  mapStateToProps,
  null,
)(PortfolioModal)
