import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Content from '../../containers/Blog/Content';
import Post from '../../containers/Blog/Post';
import Sidebar from '../../containers/Blog/Sidebar';

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { posts, initializeBlog } = this.props;
    if (posts.length === 0) {
      initializeBlog();
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div class="blog">
        <div id="loader-wrapper">
          <div id="loader"></div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
          </div>
        <div class="wrapper">
          <div class="container page-title center-align">
            <Link to="/blog">
              <h2 class="center-align">
                <span class="span-spacing span-heading">My </span>
                <span>blog</span>
              </h2>
            </Link>
          </div>
          <div class="divider center-align">
            <span class="outer-line"></span>
            <span class="fa fa-vcard" aria-hidden="true"></span>
            <span class="outer-line"></span>
          </div>
          <div class="container">
            <div class="row">
              <Route exact path="/blog" component={Content} />
              <Route 
                path="/blog/:postId"
                render={(props) => {
                  const post = posts.find(post => post.id === parseInt(props.match.params.postId), 10);
                  return <Post post={post} {...props} />
                }}
              />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
