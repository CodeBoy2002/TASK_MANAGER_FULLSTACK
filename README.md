Task Manager Project Overview

This Task Manager project encompasses the development of both backend and frontend components to facilitate task management and user authentication. Below are the detailed steps and technologies employed:

Backend Development

Project Setup:

Two working directories were created: Backend and Frontend.
The development process started by navigating into the Backend folder.
Project Initialization:

Initialized the project using the command "npm init -y".
Dependency Installation:

Installed essential dependencies required for building backend logic.
Server Setup:

Created the main server file, index.js, responsible for handling all database connections and server running functionalities.
Folder Structure:

Organized the project into three folders: Routes, Components, and Models.
Routes: Handles API endpoints for various HTTP methods (e.g., GET, POST, PUT, DELETE).
Components: Contains logic functionalities for CRUD operations (e.g., Add User, Login User, JWT implementation).
Models: Defines database schemas and logic-based functions for user-related operations.
Signup Statics: Validates email and password, and hashes the password for security.
Login Statics: Validates user credentials.
Database Connection:

Utilized MongoDB, a NoSQL database.
Created a database with username and password in MongoDB Atlas Cloud.
Stored the MongoDB connection string URL in the .env file for security purposes.
Frontend Development

Transition to Frontend:

Transitioned backend logic to frontend implementation.
Framework:

Utilized Vite.js, known for its lightweight nature, as compared to "npx create react-app".
State Management:

Implemented state management using AppContext and useReducer function to simplify complex state logic.
Utilized AppContext.Provider and useContext() hook for providing and consuming values.
Routing:

Incorporated react-router-dom for handling routing across multiple pages during the login and signup processes.
Forms:

Created signup and login forms using useState hook to manage input field changes.
Pages:

Designed two main pages: Home and Update, along with an Info page to display task details.
Security Measures:

Implemented robust authentication measures:
Unique email requirement for signup.
Strong password policy (minimum 8 characters, at least one special character, one uppercase, and one lowercase letter).
Leveraged the Validate npm package for implementing these security features.
API Handling

Thunder Client, an inbuilt extension in VS Code, was used for API handling, akin to Postman. It offers lightweight and fast handling of API routes.
Database

MongoDB was chosen for efficient data handling.
Styling

General CSS was employed for styling purposes.
Tools Used

Development Environment: VS Code
Database: MongoDB
API Handling: Thunder Client
This project amalgamates backend and frontend technologies to offer a comprehensive task management solution with robust security measures and efficient data handling capabilities.