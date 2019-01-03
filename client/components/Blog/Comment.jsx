import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div class="comment">
          <img class="comment-avatar pull-left" alt="" src="http://via.placeholder.com/100x100" />
          <div class="comment-body">
            <div class="meta-data">
              <span class="comment-author">Slim Hamdi</span>
              <span class="comment-date pull-right second-font">January 17, 2017</span>
            </div>
            <div class="comment-content">
            <p class="second-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.</p></div>
            <div>
              <a class="comment-reply" href="#">Reply</a>
            </div>	
          </div>
        </div>
        <ul class="comments-reply">
        </ul>
      </li>
    ); 
  }
}

export default Comment;
