import React, { Component } from 'react';
import moment from 'moment';

export default ({ comment }) => (
  <li>
    <div class="comment">
      <img class="comment-avatar pull-left" alt="" src="http://via.placeholder.com/100x100" />
      <div class="comment-body">
        <div class="comment-meta">
          <span class="comment-author">{`${comment.first_name} ${comment.last_name}`}</span>
          <span class="comment-date pull-right second-font">{moment(comment.created_at).fromNow()}</span>
        </div>
        <div class="comment-content">
        <p class="second-font">{comment.body}</p></div>
        <div>
          <a class="comment-reply" href="#">Reply</a>
        </div>	
      </div>
    </div>
    <ul class="comments-reply">
    </ul>
  </li>
);
