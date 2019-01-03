import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default ({ post }) => (
  <article>
    <Link to={`/blog/${post.id}`}><h4>{post.title}</h4></Link>
    <figure class="blog-figure">
      <Link to={`/blog/${post.id}`}>
        <img class="responsive-img" src={post.image_url} alt="" />
      </Link>
    </figure>
    <div class="blog-excerpt">
      <p class="second-font">{post.body.length > 300 ? `${post.body.slice(0, 300)} ...` : post.body}</p>
      <Link to={`/blog/${post.id}`} class="col s12 m4 l4 xl4 waves-effect waves-light btn readmore font-weight-700">
        Read more 
      </Link>
      <div class="meta second-font">
        <span><i class="fa fa-user"></i> <Link to="/">{`${post.first_name} ${post.last_name}`}</Link></span>
        <span class="date"><i class="fa fa-calendar"></i>{moment(post.created_at).format('D MMMM YYYY')}</span>
        <span><i class="fas fa-comments"></i><a href="blog-post-light.html">{post.comments}</a></span>
        <span><i class="fa fa-tags"></i>{post.tag.toString()}</span>
      </div>
    </div>
  </article>
)
