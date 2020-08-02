# Car Monkey

After the server is online with url : “*localhost:3000*” the homepage loads:

![img](https://lh6.googleusercontent.com/pmjzmZcN8PGbOiI5PZI-h-c_zVt2EpVmlOaeZSplnLeZq2sLRIciPOv4PAO3mrw0D0S5DJOAUVxkd5jhRjLM7-h4cvqZDbuJWy9XhlmlZdeAWk6DYhIJvB5j3d6yBLH3HHeipQlE)

The Login Page:

![img](https://lh4.googleusercontent.com/srNQ66TK0W7D2muisb5JiByoTqFJGEFwDVPas96kbNKRnFZoexcrXkfjekzv50oL50Nc-xNztiUOMk9ekxXWo6S8Gsg4F85YKTYMXB2_Ia_J4pxIfM2g4ExxnEb6BM5CzqAs4NTR)

#### ABOUT STACK:
The web app is developed with HTML, CSS and basic Javascript as frontend. NodeJS, ExpressJS Framework  and MongoDB as backends.
### HARDWARE SPECIFICATIONS:
Minimum. 2GB of RAM
Intel core i3 (or higher)
Minimum 500GB storage
### SOFTWARE AND PACKAGE DEPENDENCIES:
- Linux(Recommended) / Windows OS
- Browser
- MongoDB
- Text Editor or Developer Tool(Sublime, VSCode, Atom, etc.)
- NPM
- Node
### Node Packages
 - body-parser (package)
 - ejs (package)
 - express (Framework)
 - mongoose (package)

### MODULE LIST
- APP
- INDEX
- LOGIN
- COMINGSOON
- VIEWS
- IMAGE
- PUBLIC
- PACKAGE.JSON


### MODULES DESCRIPTION

##### “app.ejs MODULE”
This is an embedded JavaScript file(.ejs) and is run using the node bash on terminal. It is the main server module that links all the pages to the server and database. This module is used to fire up the server and load the web pages. This file is coded by using the EXPRESS framework.
When the command “node app.ejs” is run on the terminal then this module starts a server using the express framework. It then connects to the database if the mongod daemon service is active.
When the server is online it listens to all the requests it gets and responds with the necessary action. The port set for server is 3000 so “localhost:3000” is used to open webpages on a local machine. 
This module is capable of rendering and redirecting users to different pages. It can also send and read data from MONGO database.

##### “index.ejs” MODULE:
This is an ejs file embedded with dynamic HTML. This page is the homepage to the website and is rendered when ‘/’ root is requested to server i.e. “localhost:3000”.
The homepage has a sticky navigation bar that stays until the user scrolls till the footer of the page. The nav bar also consists of the company logo that can be used to redirect to homepage. Other than this the homepage contains all basic introduction to the car service portal and contact information of user. The nav bar book and login buttons can be used to proceed to the login page. Other book buttons on the page do the same operation.

##### “login.ejs” MODULE:
This page is rendered after index/homepage. The page url is “localhost:3000/loginPage”.
It has two parts. One part of the page says LOGIN and the other side says SIGN UP.  
The user can sign up by filling in a username and password. The user is required to re enter the same password in another box provided. The user signs up successfully only if the two passwords match else user gets redirected to the homepage. 
The user can also login by entering a username and password. If the user is authenticated successfully then “coming soon” page is rendered else no action.
The user can also go back to homepage with a button provided on the screen that says “Back to Homepage”

##### “comongsoon.ejs” MODULE:
This page just says “coming soon”. The website is still being developed. From here on the user will be able to make a booking after filling in some basic details of their car and the problem. The user must also enter their contact info and address. Further plan to this website includes a payment gateway for users to pay online and a confirmation mail feature.

##### VIEWS:
This is a folder that contains all the “.ejs” files for the server to lookup and render

##### IMAGE:
This folder contains all the images including the car monkey logo. This folder is used by the “.ejs” and “.css”  file types for loading images on webpage.

##### PUBLIC:
This folder contains all stylesheets for the web pages.
The sheets and named as follows:
navbar.css : stylesheet for navigation bar
loginstyle.css : login page stylesheet
style.css : homepage stylesheet

##### “package.json” FILE:
This is a “.json” file type which stores meta-data about the project packages. This file was created using the node with command “node init”. The file has details about the project, project version, author and packages. This file is really helpful to know all dependencies of the project. All the meta-data stored in the file is in the form of JavaScript Objects
