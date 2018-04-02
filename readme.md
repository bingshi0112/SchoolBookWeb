# SchoolBook 


### Project description

SchoolBook is a platform to make an online community mostly for students who are currently enrolled in school or those who are looking for some good school to apply. This website provides almost everything a student will need in his/her student life. If he/she is looking for a class to enroll. The course section will provide all the information about a specific course, from professor who is teaching the class, to students’ discussion about that course. If a student is trying to make new friends or finding a project teammate, he/she  has similar interests and specialization. If a student is to buy some school supplies, old books, or even to find a place to live near campus, he/she can to the trading section to find what he/she is looking for.

In this project, we use Angular 2 as the main framework to build this website. For user interface design and implementation, Twitter Bootstrap, css, scss, javascript and jquery are also used to enhance the experience. Since this is a lightweight website, we decide to use the backend as service platform from Google - Firebase. Firebase database and Firebase storage were used as out main backend service. There are a few collections were created on Firebase to keep different information we need to store and display in the site. All user uploaded images are stored in the Firebase storage as well. Among with this, we authorize user using their facebook account with the help with the Facebook SDK for angular2. Some basic login and graph APIs are used to verify user and to retrieve user information.



###	Installation

* clone the project from bitbucket.
* cd project_folder
* npm install
* npm start
* Notice: New facebook login development app need to be installed and the app id need to replace the current app id. The current app id is only good for one domain as we specify on facebook developer console.

###	Usage

* This website require user to login using their facebook profile to access to the full functionality.
* User can access to all the courses/ products which are registered on our website.
* With every new user that already make profile with us, the profile will be shown in the profile list.
* User can make comment, review for courses and product. User can also view other people's comment.

###	Credits

* Omkar Rege
* Adel Sadrolgharavi
* Bing Shi
* Lam Tran