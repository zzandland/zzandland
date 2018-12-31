import React from 'react';

export default ({ title, client, startDate, endDate, usedTech, link }) => (
  <div className="col s12 l6 xl6 section-padding">
    <h3 className="font-weight-700 uppercase">{title}</h3>
    <ul className="project-details second-font">
      <li><i className="fa fa-user"></i><span className="font-weight-700"> Client </span>: <span className="font-weight-400 uppercase">{client}</span></li>
      <li><i className="far fa-calendar"></i><span className="font-weight-700"> Start Date </span>: <span className="font-weight-400 uppercase">{startDate}</span></li>
      {endDate ?
        <li><i className="far fa-calendar-check"></i><span className="font-weight-700"> End Date </span>: <span className="font-weight-400 uppercase">{endDate}</span></li>
        : null
      }
      <li><i className="fa fa-cogs"></i> <span className="font-weight-700">Used Stack</span> : <span className="font-weight-400 uppercase">{usedTech}</span></li>
    </ul>
    <hr />
    <a href={link} target="_blank" className="waves-effect waves-light btn font-weight-700">Preview <i className="fas fa-share-square"></i></a>
  </div>
)
