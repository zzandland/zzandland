import React from 'react';

export default props => (
  <div className="container badges">
    <div className="row">
      <div className="col s12 m4 l4 center-align">
        <h3>
          <i className="fa fa-briefcase"></i>
					<span className="font-weight-900">4+</span>
        </h3>
        <h6 className="uppercase font-weight-700">Years Experience</h6>
      </div>
      <div className="col s12 m4 l4 center-align">
        <h3>
          <i className="far fa-handshake"></i>
          <span className="font-weight-900">89+</span>
        </h3>
        <h6 className="uppercase font-weight-700">Done Projects</h6>
      </div>
      <div className="col s12 m4 l4 center-align">
        <h3>
          <i className="far fa-heart"></i>
          <span className="font-weight-900">77+</span>
        </h3>
        <h6 className="uppercase font-weight-700">Happy customers</h6>
      </div>
    </div>
  </div>
)
