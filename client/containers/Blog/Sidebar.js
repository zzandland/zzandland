import { connect } from 'react-redux';
import Sidebar from '../../components/Blog/Sidebar';

const mapStateToProps = ({ Blog }) => ({
  posts: Blog.posts,
})

export default connect(
  mapStateToProps,
  null,
)(Sidebar)
