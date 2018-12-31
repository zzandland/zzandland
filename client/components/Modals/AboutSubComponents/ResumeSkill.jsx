import React from 'react';
import SkillBlock from './ResumeSkillBlock.jsx';

export default ({ skills, className, changeActiveItem }) => (
  <div className={className} onClick={() => changeActiveItem('skill') }>
    <div className="resume-card-header">
      <div className="resume-card-name"><i className="fa fa-star"></i> Skills</div>
    </div>
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          <div className="col s6">
            {skills.slice(0, Math.ceil(skills.length / 2)).map(skill => (
              <SkillBlock skill={skill} />
            ))}
          </div>
          <div className="col s6">
            {skills.slice(Math.ceil(skills.length / 2)).map(skill => (
              <SkillBlock skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)
