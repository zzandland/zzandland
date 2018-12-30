import React from 'react';

export default (props) => (
  <div className="col s12 m7 l7 xl8 rightside">
    <h6 className="uppercase m-none font-weight-700">Ask me anything!</h6>
    <div className="row">
      <p className="col s12 m12 l12 xl10 second-font">
        I am actively looking for a job opportunity, projects, or new connections with fellow tech-minded fellows! Please send me an email and I will reply you shortly.
      </p>
    </div>
    <form className="contactform" method="post" action="php/process-form.php">
      <div className="input-field second-font">
        <i className="fa fa-user prefix"></i>
        <input id="name" name="name" type="text" className="validate" required></input>
        <label className="font-weight-400" for="name">Your Name</label>
      </div>
      <div className="input-field second-font">
        <i className="fa fa-envelope prefix"></i>
        <input id="email" type="email" name="email" className="validate" required></input>
        <label for="email">Your Email</label>
      </div>
      <div className="input-field second-font">
        <i className="fa fa-comments prefix"></i>
        <textarea id="comment" name="comment" className="materialize-textarea" required></textarea>
        <label for="comment">Your Comment</label>
      </div>
      <div className="col s12 m12 l9 xl8 submit-form">
        <button className="btn font-weight-700" type="submit" name="send">
Send Message <i className="fas fa-share-square"></i>
        </button>
      </div>
      <div className="col s12 m12 l8 xl8 form-message">
        <span className="output_message center-align font-weight-700 uppercase"></span>
      </div>
    </form>
  </div>
)
