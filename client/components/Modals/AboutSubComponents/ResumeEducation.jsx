import React from 'react';
import EducationBlock from './ResumeEducationBlock';

export default ({ educations, className, changeActiveItem }) => (
  <div className={className} onClick={() => changeActiveItem('education')}>
		<div className="resume-card-header">
			<div className="resume-card-name"><i className="fa fa-graduation-cap"></i> Education</div>
		</div>
		<div className="resume-card-body education">
			<div className="resume-card-body-container second-font">
				{educations.map(education => (
					<EducationBlock education={education} />
				))}
			</div>
		</div>
	</div>
)
