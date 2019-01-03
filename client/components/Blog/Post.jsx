import React, { Component } from 'react';
import moment from 'moment';
import Comment from './PostSubComponents/Comment';
import CommentForm from './PostSubComponents/CommentForm';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getComments, match } = this.props;
    getComments(match.params.postId);
  }

  render() {
    const { title, image_url, body, first_name, last_name, created_at, comments, tag } = this.props.post;
    console.log(this.props);
    return (
      <div class="content col s12 m8 l8 xl8">
        <article>
          <h4>{title}</h4>
          <figure class="blog-figure">
            <img class="responsive-img" src={image_url} alt="" />
          </figure>
          <div class="blog-excerpt second-font">
            <p>{body}</p>
            <div class="meta second-font">
              <span><i class="fa fa-user"></i> <a href="#">{`${first_name} ${last_name}`}</a></span>
              <span class="date"><i class="fa fa-calendar"></i>{moment(created_at).format('D MMMM YYYY')}</span>
              <span><i class="fas fa-comments"></i> <a href="blog-post-light.html">{comments}</a></span>
              <span><i class="fa fa-tags"></i>{tag.toString()}</span>
              <span class="permalink"><i class="fa fa-link"></i> <a href="blog-post-light.html">permalink</a></span>
            </div>
          </div>
          <div class="comments">
            <h3 class="comments-heading uppercase">{comments} Comments</h3>
            <ul class="comments-list">
              {this.props.comments.map(comment => <Comment comment={comment} />)}
            </ul>
            <h3 class="comments-heading uppercase add-comment">Add a comment</h3>
            <CommentForm />
          </div>
        </article>
      </div>
    );
  }
}

export default Post;
