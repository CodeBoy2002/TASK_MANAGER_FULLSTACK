TASK MANAGER PROJECT DETAILS

1. Created Two Working directories names Backend and Frontend
2. CD into the Backend Folder.

STEPS:-
1. Initialize the project with "npm init -y" command
2. Install necessary dependencies which help in building backend logic
3. Created server login in index.js file -> Also the main server file in backend folder which handle all the database    connection and server running functionalities.
4. Created Three Folders Routes, Components and Models
   
   1. Route -> Which will redirect to the api location (i.e:- GET, POST, PUT, DELETE)
   2. Components -> Contains Logic Functionality to perform different CRUD based operations (i.e:- ADD USER, LOGIN USER, JSON WEB TOKEN) 
   3. Models -> Contains schema of the database which provides the format, in which manner we have to enter user details and also contains the Two Logic based function.
        1. Signup Statics -> To check the validation of email and password and hash the password for password security.
        2. Login Statics -> To check the email and password is entered correct or not.
    
5. DATABASE CONNECTION
   1. Used MongoDB A.K.A NO-SQL Database for this project.
   2. Created the database with username and password in Mongo Atlas Cloud.
   3. Enter the MONGO CONNECTION STRING URL in .env file, so that no other person accept the developer has the direct access to the CONNECTION STRING (AS it leads to data breach).
   4. After successful connection, users data getting stored in Mongo Atlas (DB NAME:- task_manages_users_db).



6. After successful Authentication backend Logic Moved to Frontend Part.
    1. Used Vite.js (npm create vite@latest), which is the light weight as compare to "npx create react-app".
    2. Used AppContext and useReducer function, so that the Complex Logic of state Management becomes simple.

    --> const AppContext = createContext()
    AppContext Provided two components:- 
        1. Provider -> Which provided the "values" and used like AppContext.Provider
        2. Consumer -> Which is used to use the "values" provided by the AppContext.Provider, with the help of useContext() Hook.
    
    3. Install react-router-dom for routing in multiple pages during login ans signup process.
        --> npm i react-router-dom
        <Routes>
            <Route path='/signup' element={<Signup/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
        <Routes>

    4. Created Two Forms for user functionality SignUp and Login Form.
        Hooks -> {useState:- Use to make the changes in the given input fields, it stores the value and triggers the re-render.}