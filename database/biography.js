(function() {
  const fs = require('fs');

  const biography = {
    experiences: [
      { title: 'Freelance Web Developer',
        company: null,
        years: null,
        description: `Develop responsive, intuitive web applications with Node.js, Redis, MySQL, PostgreSQL, MongoDB for back-end stack with experiences in RESTful APIs, Ajax, service-oriented architecture, and React and Redux for front-end stack.`,
      },
      { title: 'Course Designer & Instructor',
        company: 'North Toronto High School',
        years: '2017',
        description: `Provided academic and mental assistance to more than 10 students to enter post-secondary programs that they desired.`,
      },
    ],
    educations: [
      { institution: 'Hack Reactor',
        degree: 'Advanced Software Engineering Immersive Program',
        start_year: 2018,
        end_year: 2018,
        description: '12 weeks intensive web development program focusing on React and Node.js',
      },
      { institution: 'University of Toronto',
        degree: 'BS in Biology with High Distinction',
        start_year: 2012,
        end_year: 2017,
        description: 'Graduated with cGPA of 3.8',
      },
      { institution: 'Earnest Manning High School',
        degree: 'Diploma',
        start_year: 2009,
        end_year: 2012,
        description: null,
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
    portfolios: [
      { title: 'WeTube',
        client: 'Personal Project',
        startDate: '12/03/2018',
        endDate: null,
        usedTech: 'Socket.io, React, Redux, Node.js',
        images: [
          'http://via.placeholder.com/535x400',
        ],
        link: 'https://www.wetube.cloud',
      },
    ],
  };

  let data = '';
  for (let section in biography) {
    let tableCol;
    if (section === 'experiences') {
      tableCol = 'self_experience(title,company,years,description)';
    } else if (section === 'educations') {
      tableCol = 'self_education(institution,degree,start_year,end_year,description)';
    } else if (section === 'skills') {
      tableCol = 'self_skill(name,proficiency)';
    } else {
      tableCol = 'self_portfolio(title,client,start_date,end_date,used_tech,images,hyper_link)';
    }
    let values = `VALUES`
    for (var item of biography[section]) {
      let value = `(`;
      for (var prop in item) {
        if (item[prop] === null) {
          value += 'NULL,'
        } else {
          value += `'${item[prop]}',`;
        }
      }
      values += `${value.slice(0, value.length - 1)}),`;
    }
    data += `INSERT INTO ${tableCol} ${values.slice(0, values.length - 1)};\n`;
  }

  data += `
INSERT INTO blog_user(first_name,last_name,email,image_url) VALUES('Si Yong','Kim','zzandland@gmail.com','https://s3-us-west-1.amazonaws.com/zzandland.io/portrait.jpeg');
INSERT INTO blog_post(title,author,image_url,body,tag) VALUES('First Blog Post Mock',1,'https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shiba-inu-temperament-and-personality_canna-pet-1024x683.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','{javascript,react,ssr}');
`;

  fs.writeFile('seed.sql', data, () => {
    console.log('writing seed.sql complete');
  })
}())
