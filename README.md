# Capstone Part 1 

This is fullstack application with React, Redux, Express, Mongoose and Passport.

## Features

- Server

  - User and Message models with `1:N` relation
  - Full CRUD REST API operations for both Message and User models
  - Passport authentication with local `email/password`, Facebook and Google OAuth strategies and JWT protected APIs
  - `User` and `Admin` roles
  - NodeJS server with Babel for new JS syntax unified with React client
  - `async/await` syntax across whole app
  - Joi server side validation of user's input
  - Image upload with Multer
  - Database seed

- Client

  - React client with functional components and Hooks
  - Redux state management with Thunk for async actions
  - Home, Users, Profile, Admin, Notfound, Login and Register pages
  - Protected routes with Higher order components
  - Different views for unauthenticated, authenticated and admin user
  - Edit/Delete forms for Message and User with Formik and Yup validation
  - Admin has privileges to edit and delete other users and their messages
  - Layout component, so you can have pages without Navbar
  - Loading states with Loader component
  - Single config file within `/constants` folder

# System Achitetecture
We will using the MERN Stack for building our application. We will be using React for our front end, and we will use express for the custom server in the back end. This application is designed to be a communication tool between Teachers and Students for questions and answers, as an answer to the new ways of working and studying, but can also be used post Lock down.

The architecture of our application is based on a typical MVC model. Our Client tier (View) will be written in Javascript, HTML, and CSS, using ReactJS as the framework. This level of the architecture is what the user will interact with to access the features of our application.

The Business Logic Tier (Controller) will be written using NodeJs and ExpressJS, and this tier represents the Application Server that will act as a bridge of communication for the Client Tier and Database Tier. This tier will serve HTML pages to the user’s device and accept HTTP requests from the user and follow with the appropriate response.

Our Database Tier (Model) will be hosting MongoDB. This is where we will store all of the crucial data our application needs to function.

# System requirements Specification

Below we will describe the Functional and Non Functional requirements of our application:

## Functional Requirements
1.	Screen 1 Allow user to register for access or log in 
1.1	Field 1 allow user to log in if they have credentials 
1.2	Field 2 allow user to register for access if they dont have log in credentials
1.3	Field 3 allow to user to log in using either Facebook auth,google auth or email and password
1.4	System to allow user to proceed to next screen if log on credentials passed
1.5 allow users to see existing messages even if they not logged in
1.6 Ensure message shows the user that posted the message, their avatar and when it was logged
1.7 keep messaged visible even when the users are logged off, but allow them to post messages when logged off

2. Screen 2 Once logged in and if user is Admin, provide user with following options:
2.1 Allow Admin to be able to enter message and post message
2.2 Allow Admin to be able to see list of users on the system
2.3 Allow Admin to be able to update/delete other users details such as avatar,name, email etc
2.4 Allow Admin to be able to delete users profile
2.5 Allow Admin to be able to update/delete Admin details such as avatar, name, email etc
2.6 Allow Admin to be able to delete Admin profile
2.7 Allow Admin to access admin dashboard
2.8 Allow Admin to be able to log off

3. Screen 3 Once logged in and if role is user, provide user with following options:
3.1 Allow User to be able to enter message and post message
3.2 Allow User to be able to see own user profile and other profiles
3.3 Allow User to be able to update/delete their own details only such as avatar,name, email etc
3.4 Allow User to be able to delete their own profile only
3.8 Allow User to be able to log off

## Non Functional Requirements
1.	The application should be capable enough to handle 100 users without affecting its performance
2.  The software should be portable. So moving from one OS to other OS does not create any problem
3.  Users never allowed to update or access other users information, unless user has admin rights
4.  The system should be able to switch between screens in less than 0.1 second

# User Stories
1. As a user, I want to register for access, so that I can access the system
2. As a user, I want to log in, so that I can use system
3. As an Admin, I want to access a users profile, so I can change the avatar
4. As an Admin, I wanto access a users profile, so I can delete the users profile
5. As an Admin, I want to access the users profile, so I can update the users email address
6. As a user, I want to access my profile, so I can change my name
7. As a user, I want to access my profile, so I can post a message
8. As a user, I want to access my profile, so I can see other users profiles
