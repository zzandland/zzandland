import React from 'react';

export default props => (
  <div className="container badges">
    <div className="row">
      <div className="col s12 m4 l4 center-align">
        <h3>
          <i className="far fa-handshake"></i>
          <span className="font-weight-900">4+</span>
        </h3>
        <h6 className="uppercase font-weight-700">Done Projects</h6>
      </div>
      <div className="col s12 m4 l4 center-align">
        <h3>
          <i className="fab fa-linux"></i>
					<span className="font-weight-900">5</span>
        </h3>
        <h6 className="uppercase font-weight-700">Tried Linux Distros</h6>
      </div>
      <div className="col s12 m4 l4 center-align">
        <h3>
          <i className="fas fa-drum"></i>
          <span className="font-weight-900">10+</span>
        </h3>
        <h6 className="uppercase font-weight-700">Years Playing Drums</h6>
      </div>
    </div>
  </div>
)
