import { connect } from 'react-redux';
import Blog from '../../components/Blog/Blog';
import { initializeBlog } from '../../actions';

const mapStateToProps = ({ Blog }) => ({
  posts: Blog.posts,
});

const mapDispatchToProps = dispatch => ({
  initializeBlog: () => dispatch(initializeBlog()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blog)
