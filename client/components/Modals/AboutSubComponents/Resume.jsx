import React from 'react';
import Media from 'react-media';
import Experiences from '../../../containers/Modals/AboutSubComponents/ResumeSubComponents/Experiences';
import Educations from '../../../containers/Modals/AboutSubComponents/ResumeSubComponents/Educations';
import Skills from '../../../containers/Modals/AboutSubComponents/ResumeSubComponents/Skills';

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
      <div className="container">
        <div className="valign-wrapper">
          <div className="col s12 m12 l8 resume-cards-container section-padding">
            <Media query="(max-width: 800px)">
              {matches => 
                matches ? (
                  <div className="resume-cards">
                    <Experiences className="resume-card resume-card-0" />
                    <Educations className="resume-card resume-card-1" />
                    <Skills className="resume-card resume-card-2" />
                  </div>
                ) : (
                  <div className="resume-cards">
                    <Experiences className={selective.experience} />
                    <Educations className={selective.education} />
                    <Skills className={selective.skill} />
                  </div>
                )  
              }
            </Media>
          </div>
        </div>
      </div>
    </div>
  );
}
