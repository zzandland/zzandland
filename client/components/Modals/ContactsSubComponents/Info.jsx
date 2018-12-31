import React from 'react';

export default (props) => (
  <div className="col s12 m5 l5 xl4 leftside">
    <h6 className="font-weight-700 uppercase">Phone</h6>
    <span className="font-weight-400 second-font"><i className="fa fa-phone"></i>+1 415 691 5310</span>
    <h6 className="font-weight-700 uppercase">Email</h6>
    <span className="font-weight-400 second-font"><i className="fa fa-envelope"></i>zzandland@gmail.com</span>
    <h6 className="font-weight-700 uppercase">Skype</h6>
    <span className="font-weight-400 second-font"><i className="fab fa-skype"></i>zzandland</span>
    <h6 className="font-weight-700 uppercase">Address</h6>
    <span className="font-weight-400 second-font"><i className="fa fa-home"></i>1 St Francis Place #6208</span><br />
    <span className="font-weight-400 second-font">San Francisco, California, 94107</span>
    <h6 className="font-weight-700 uppercase">Social Profiles</h6>
    <div className="social">
        <ul className="list-inline social social-intro center-align p-none">
            <li className="facebook"><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li className="google-plus"><a href="#"><i className="fab fa-google-plus"></i></a></li>
            <li className="linkedin"><a href="#"><i className="fab fa-linkedin"></i></a></li>
        </ul>
    </div>
  </div>
)
