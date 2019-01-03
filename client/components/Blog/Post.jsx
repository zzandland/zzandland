import React from 'react';
import moment from 'moment';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default ({ post }) => {
  console.log(post);
  return (
    <div class="content col s12 m8 l8 xl8">
      <article>
        <h4>{post.title}</h4>
        <figure class="blog-figure">
          <img class="responsive-img" src={post.image_url} alt="" />
        </figure>
        <div class="blog-excerpt second-font">
          <p>{post.body}</p>
          <div class="meta second-font">
            <span><i class="fa fa-user"></i> <a href="#">{`${post.first_name} ${post.last_name}`}</a></span>
            <span class="date"><i class="fa fa-calendar"></i>{moment(post.created_at).format('D MMMM YYYY')}</span>
            <span><i class="fas fa-comments"></i> <a href="blog-post-light.html">18</a></span>
            <span><i class="fa fa-tags"></i>{post.tag.toString()}</span>
            <span class="permalink"><i class="fa fa-link"></i> <a href="blog-post-light.html">permalink</a></span>
          </div>
        </div>
        <div class="comments">
          <h3 class="comments-heading uppercase">17 Comments</h3>
          <ul class="comments-list">
            <Comment />
          </ul>
          <h3 class="comments-heading uppercase add-comment">Add a comment</h3>
          <CommentForm />
        </div>
      </article>
    </div>
  );
}
