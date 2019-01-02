import React from 'react';

export default ({ education }) => {
  let years;
  if (!education.end_year) {
    years = `${education.start_year} - Current`;
  }
  if (education.start_year === education.end_year) {
    years = education.start_year;
  } else {
    years = `${education.start_year} - ${education.end_year}`;
  }
  return (
    <div className="resume-content">
    <div>
        <h6 className="uppercase"><span>{`${education.degree} - `}</span>{education.institution}</h6>
        <span className="date"><i className="far fa-calendar"></i>{years}</span>
        <p>{education.description}</p>
      </div>
      <span className="separator"></span>
    </div>
  );
}
