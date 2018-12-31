const initialState = {
  experiences: [
    { title: 'Freelance Web Developer',
      company: '',
      years: 'Current',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper`,
    },
    { title: 'Course Designer & Instructor',
      company: 'North Toronto High School',
      years: '2017',
      description: `Re-designed curriculum to prioritize subjects that are more integral to achieve higher grades. 
      Provided academic and mental assistance to more than 10 students to enter post-secondary programs that they desired.`,
    },
  ],
  educations: [
    { institution: 'Hack Reactor',
      degree: 'Advanced Software Engineering Immersive Program',
      years: '2018',
    },
    { institution: 'University of Toronto',
      degree: 'BS in Biology with High Distinction',
      years: '2012 - 2017',
    },
  ],
  skills: [
    { name: 'Javascript',
      proficiency: 5,
    },
    { name: 'React',
      proficiency: 5,
    },
    { name: 'Restful API',
      proficiency: 4.5,
    },
    { name: 'NoSQL',
      proficiency: 5,
    },
    { name: 'AWS',
      proficiency: 4,
    },
    { name: 'Node.js',
      proficiency: 4.5,
    },
    { name: 'Redux',
      proficiency: 4.5,
    },
    { name: 'AJAX',
      proficiency: 5,
    },
    { name: 'SQL',
      proficiency: 4,
    },
    { name: 'HTML/CSS',
      proficiency: 3.5,
    },
 ],
  portfolio: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
