import React from 'react';

export default ({ skill }) => {
  const star = [];
  for (var i = 0; i < Math.floor(skill.proficiency); i++) {
    star.push(<i className="fas fa-star"></i>);
  }
  if (skill.proficiency % 1 !== 0) {
    star.push(<i className="fas fa-star-half-alt"></i>);
    i++;
  }
  while (parseInt(i, 10) < 5) {
    star.push(<i className="far fa-star"></i>);
    i++;
  }
  return (
    <div className="resume-content">
      <h6 className="uppercase">{skill.name}</h6>
      <p>{star}</p>
    </div>
  );
}
