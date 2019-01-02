import React from 'react';

export default ({ experience }) => {
  if (experience.company && !experience.company.includes(' - ')) {
    experience.company = ` - ${experience.company}`;
  }
  if (!experience.years) experience.years = 'Current';
  return (
    <div className="resume-content">
      <div>
        <h6 className="uppercase"><span>{experience.title}</span>{experience.company}</h6>
        <span className="date"><i className="far fa-calendar"></i>{experience.years}</span>
        <p>{experience.description}</p>
      </div>
      <span className="separator"></span>
    </div>
  )
}
