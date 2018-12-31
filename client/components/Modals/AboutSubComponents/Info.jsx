import React from 'react';

export default props => (
  <div className="container infos">
    <div className="divider center-align">
      <span className="outer-line"></span>
      <span className="fas fa-address-card" aria-hidden="true"></span>
      <span className="outer-line"></span>
    </div>
    <div className="row">
      <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
        <img src="http://via.placeholder.com/594x1032" className="responsive-img my-picture" alt="My Photo" />
      </div>
      <div className="col s12 m8 l12 xl12 personal-info section-padding">
        <h6 className="uppercase"><i className="fa fa-user"></i> Personal Info</h6>
        <div className="col m12 l12 xl9 p-none">
          <p className="second-font">I'm a Full-stack Software Engineer based in San Francisco, California.<br />
            I am passionate about web-related technology and enjoy building web applications. 
          </p>
        </div>
        <div className="col s12 m12 l6 p-none">
          <ul className="second-font list-1">
            <li><span className="font-weight-700">First Name: </span>Si Yong</li>
            <li><span className="font-weight-700">Last Name: </span>Kim</li>
            <li><span className="font-weight-700">Date of birth: </span>24 August 1993</li>
            <li><span className="font-weight-700">Nationality: </span>Canadian</li>
            <li><span className="font-weight-700">Freelance: </span>Available</li>
          </ul>
        </div>
        <div className="col s12 m12 l6 p-none">
          <ul className="second-font list-2">
            <li><span className="font-weight-700">Phone: </span>+1 415 691 5310</li>
            <li><span className="font-weight-700">Address: </span>1 St Francis Place #6208 San Francisco 94107</li>
            <li><span className="font-weight-700">Email: </span>zzandland@gmail.com</li>
            <li><span className="font-weight-700">Spoken Langages: </span>English - Korean - Japanese</li>
            <li><span className="font-weight-700">Skype: </span>zzandland</li>
          </ul>
        </div>
        <a 
          href="https://s3-us-west-1.amazonaws.com/zzandland.io/Resume+-+Si+Yong+Kim.pdf"
          className="btn font-weight-700"
          target="_blank"
        >
    Download Resume <i className="far fa-file-pdf"></i>
        </a>
        <a href="blog-light.html" className="btn btn-blog font-weight-700">
        My Blog <i className="fa fa-edit"></i>
        </a>
      </div>
    </div>
  </div>
)
