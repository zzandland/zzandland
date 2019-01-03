import React from 'react';

export default (props) => (
  <div class="comments-form">
    <form role="form">
      <div class="input-field second-font">
        <i class="fa fa-user prefix"></i>
        <input id="name" name="name" type="text" class="validate" required />
        <label class="font-weight-400" for="name">Your Name</label>
      </div>
      <div class="input-field second-font">
        <i class="fa fa-envelope prefix"></i>
        <input id="email" type="email" name="email" class="validate" required />
        <label for="email">Your Email</label>
      </div>
      <div class="input-field second-font">
        <i class="fa fa-comments prefix"></i>
        <textarea id="comment" name="comment" class="materialize-textarea" required></textarea>
        <label for="comment">Your comment</label>
      </div>
      <div class="col s12 m12 l6 xl6 submit-form">
        <button class="btn font-weight-700" type="submit" name="send">
          Add comment <i class="fa fa-comment"></i>
        </button>
      </div>
    </form>
  </div>
)
