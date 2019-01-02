import { connect } from 'react-redux';
import Content from '../../components/Blog/Content';

const mapStateToMaps = ({ Blog }) => ({
  posts: Blog.posts,
});

export default connect(
  mapStateToMaps,
  null
)(Content)
