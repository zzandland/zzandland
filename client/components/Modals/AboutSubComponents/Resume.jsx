import React from 'react';
import ResumeExperience from './ResumeExperience';
import ResumeEducation from './ResumeEducation';
import ResumeSkill from './ResumeSkill';

export default ({ experiences, educations, skills }) => (
  <div className="resume-container">
    <div className="container">
      <div className="valign-wrapper row">
        <div className="resume-list col l4 section-padding">
          <div className="resume-list-item is-active" data-index="0" id="resume-list-item-0">
            <div className="resume-list-item-inner">
              <h6 className="resume-list-item-title uppercase"><i className="fa fa-briefcase"></i> Experience</h6>
            </div>
          </div>
          <div className="resume-list-item" data-index="1" id="resume-list-item-1">
            <div className="resume-list-item-inner">
              <h6 className="resume-list-item-title uppercase"><i className="fa fa-graduation-cap"></i> Education</h6>
            </div>
          </div>
          <div className="resume-list-item" data-index="2" id="resume-list-item-2">
            <div className="resume-list-item-inner">
              <h6 className="resume-list-item-title uppercase"><i className="fa fa-star"></i> Skills</h6>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l8 resume-cards-container section-padding">
          <div className="resume-cards">
            <div className="resume-card resume-card-0" data-index="0">
              <div className="resume-card-header">
                <div className="resume-card-name"><i className="fa fa-briefcase"></i> Experience</div>
              </div>
              <div className="resume-card-body experience">
                <div className="resume-card-body-container second-font">
                  {experiences.map(experience => (
                    <ResumeExperience experience={experience} />
                  ))}
                </div>
              </div>
            </div>
            <div className="resume-card resume-card-1" data-index="1">
              <div className="resume-card-header">
                <div className="resume-card-name"><i className="fa fa-graduation-cap"></i> Education</div>
              </div>
              <div className="resume-card-body education">
                <div className="resume-card-body-container second-font">
                  {educations.map(education => (
                    <ResumeEducation education={education} />
                  ))}
                </div>
              </div>
            </div>
            <div className="resume-card resume-card-2" data-index="2">
              <div className="resume-card-header">
                <div className="resume-card-name"><i className="fa fa-star"></i> Skills</div>
              </div>
              <div className="resume-card-body skills">
                <div className="resume-card-body-container second-font">
                  <div className="row">
                    <div className="col s6">
                      {skills.slice(0, Math.ceil(skills.length / 2)).map(skill => (
                        <ResumeSkill skill={skill} />
                      ))}
                    </div>
                    <div className="col s6">
                      {skills.slice(Math.ceil(skills.length / 2)).map(skill => (
                        <ResumeSkill skill={skill} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
