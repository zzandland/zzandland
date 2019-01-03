import { connect } from 'react-redux';
import Post from '../../components/Blog/Post';
import { getComments } from '../../actions';

const mapStateToProps = ({ Comment }) => ({
  comments: Comment,
});

const mapDispatchToProps = dispatch => ({
  getComments: postId => dispatch(getComments(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post)
