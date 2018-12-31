import React from 'react';
import ResumeExperience from '../../../containers/AboutResumeExperience';
import ResumeEducation from '../../../containers/AboutResumeEducation';
import ResumeSkill from '../../../containers/AboutResumeSkill';

export default ({ activeMenu, changeActiveItem }) => {
  let selective = {
    experience: 'resume-card resume-card-0',
    education: 'resume-card resume-card-1',
    skill: 'resume-card resume-card-2',
  }
  let menuList = ['experience', 'education', 'skill'];
  if (activeMenu === 'experience') {
    selective.experience += ' front';
    selective.education += ' back';
    selective.skill += ' back-back';
  } else if (activeMenu === 'education') {
    selective.experience += ' back-back';
    selective.education += ' front';
    selective.skill += ' back';
  } else {
    selective.experience += ' back';
    selective.education += ' back-back';
    selective.skill += ' front';
  }

  return (
    <div className="resume-container">
      <div className="container">
        <div className="valign-wrapper row">
          <div className="resume-list col l4 section-padding">
            {menuList.map((menu, index) => {
              const className = activeMenu === menu ? 'resume-list-item is-active' : 'resume-list-item';
              return (
                <div className={className} onClick={() => changeActiveItem(menu)} key={index}>
                  <div className="resume-list-item-inner">
                    <h6 className="resume-list-item-title uppercase"><i className="fa fa-briefcase"></i>{menu}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col s12 m12 l8 resume-cards-container section-padding">
            <div className="resume-cards">
              <ResumeExperience className={selective.experience} />
              <ResumeEducation className={selective.education} />
              <ResumeSkill className={selective.skill} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
