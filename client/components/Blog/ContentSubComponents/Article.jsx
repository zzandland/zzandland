import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default ({ post }) => (
  <article>
    <a href="blog-post-light.html"><h4>{post.title}</h4></a>
    <figure class="blog-figure">
      <a href="blog-post-light.html">
        <img class="responsive-img" src={post.image_url} alt="" />
      </a>
    </figure>
    <div class="blog-excerpt">
      <p class="second-font">{post.body.length > 300 ? `${post.body.slice(0, 300)} ...` : post.body}</p>
      <a href="blog-post-light.html" class="col s12 m4 l4 xl4 waves-effect waves-light btn readmore font-weight-700">
        Read more 
      </a>
      <div class="meta second-font">
        <span><i class="fa fa-user"></i> <Link to="/">{`${post.first_name} ${post.last_name}`}</Link></span>
        <span class="date"><i class="fa fa-calendar"></i>{moment(post.created_at).format('D MMMM YYYY')}</span>
        <span><i class="fas fa-comments"></i> <a href="blog-post-light.html">18</a></span>
        <span><i class="fa fa-tags"></i>{post.tag.toString()}</span>
      </div>
    </div>
  </article>
)
