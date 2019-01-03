INSERT INTO self_experience(title,company,years,description) VALUES('Freelance Web Developer',NULL,NULL,'Develop responsive, intuitive web applications with Node.js, Redis, MySQL, PostgreSQL, MongoDB for back-end stack with experiences in RESTful APIs, Ajax, service-oriented architecture, and React and Redux for front-end stack.'),('Course Designer & Instructor','North Toronto High School','2017','Provided academic and mental assistance to more than 10 students to enter post-secondary programs that they desired.');
INSERT INTO self_education(institution,degree,start_year,end_year,description) VALUES('Hack Reactor','Advanced Software Engineering Immersive Program','2018','2018','12 weeks intensive web development program focusing on React and Node.js'),('University of Toronto','BS in Biology with High Distinction','2012','2017','Graduated with cGPA of 3.8'),('Earnest Manning High School','Diploma','2009','2012',NULL);
INSERT INTO self_skill(name,proficiency) VALUES('Javascript','5'),('React','5'),('Restful API','4.5'),('NoSQL','5'),('AWS','4'),('Node.js','4.5'),('Redux','4.5'),('AJAX','5'),('SQL','4'),('HTML/CSS','3.5');
INSERT INTO self_portfolio(title,client,start_date,end_date,used_tech,images,hyper_link) VALUES('WeTube','Personal Project','12/03/2018',NULL,'Socket.io, React, Redux, Node.js','http://via.placeholder.com/535x400','https://www.wetube.cloud');

INSERT INTO blog_user(first_name,last_name,email,image_url) VALUES('Si Yong','Kim','zzandland@gmail.com','https://s3-us-west-1.amazonaws.com/zzandland.io/portrait.jpeg');
INSERT INTO blog_post(title,author,image_url,body,tag) VALUES('First Blog Post Mock',1,'https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shiba-inu-temperament-and-personality_canna-pet-1024x683.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','{javascript,react,ssr}');
INSERT INTO blog_comment(body,author,post) VALUES('test comment 1',1,1),('test comment 2',1,1);
