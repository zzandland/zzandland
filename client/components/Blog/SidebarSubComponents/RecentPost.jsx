import React from 'react';
import moment from 'moment';

export default ({post}) => (
  <li>
    <div class="posts-thumb pull-left"> 
      <a href="blog-post-light.html">
        <img alt="img" src={post.image_url} />
      </a>
    </div>
    <div class="post-info">
      <h4 class="entry-title">
        <a href="blog-post-light.html">{post.title}</a>
      </h4>
      <p class="post-meta second-font">
        <span class="post-date">{moment(post.created_at).format('D MMMM YYYY')}</span>
      </p>
    </div>
    <div class="clearfix"></div>
  </li>

)
