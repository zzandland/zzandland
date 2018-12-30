import React from 'react';

export default ({ education }) => {
  return (
    <div className="resume-content">
      <div>
        <h6 className="uppercase"><span>{`${education.degree} - `}</span>{education.institution}</h6>
        <span className="date"><i className="far fa-calendar"></i>{education.years}</span>
        <p></p>
      </div>
      <span className="separator"></span>
    </div>
  );
}
