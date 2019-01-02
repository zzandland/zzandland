import React from 'react';
import Article from './ContentSubComponents/Article';

export default ({ posts }) => (
  <div class="content col s12 m8 l8 xl8">
    {posts.map(post => <Article post={post} />)}
    <ul class="pagination center-align">
      <li class="disabled"><a href="#!"><i class="fa fa-angle-left"></i></a></li>
      <li class="active"><a href="#!">1</a></li>
      <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li>
      <li class="waves-effect"><a href="#!"><i class="fa fa-angle-right"></i></a></li>
    </ul>
  </div>
)
