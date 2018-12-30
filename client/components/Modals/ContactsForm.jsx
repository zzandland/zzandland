import React from 'react';

export default (props) => (
  <div class="col s12 m7 l7 xl8 rightside">
    <h6 class="uppercase m-none font-weight-700">Feel free to drop me a line</h6>
    <div class="row">
      <p class="col s12 m12 l12 xl10 second-font">
      If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.
      </p>
    </div>
    <form class="contactform" method="post" action="php/process-form.php">
      <div class="input-field second-font">
        <i class="fa fa-user prefix"></i>
        <input id="name" name="name" type="text" class="validate"></input>
        <label class="font-weight-400" for="name">Your Name</label>
      </div>
      <div class="input-field second-font">
        <i class="fa fa-envelope prefix"></i>
        <input id="email" type="email" name="email" class="validate"></input>
        <label for="email">Your Email</label>
      </div>
      <div class="input-field second-font">
        <i class="fa fa-comments prefix"></i>
        <textarea id="comment" name="comment" class="materialize-textarea" required></textarea>
        <label for="comment">Your Comment</label>
      </div>
      <div class="col s12 m12 l9 xl8 submit-form">
        <button class="btn font-weight-700" type="submit" name="send">
Send Message <i class="fa fa-send"></i>
        </button>
      </div>
      <div class="col s12 m12 l8 xl8 form-message">
        <span class="output_message center-align font-weight-700 uppercase"></span>
      </div>
    </form>
  </div>
)
