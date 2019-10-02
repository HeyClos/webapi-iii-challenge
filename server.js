const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const logger = require('morgan');

const userRouter = require('./users/userRouter');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  var event = new Date();
  // cant this just be ${Date.now()}?
  console.log(`${req.method} ${req.url} ${event.toTimeString}`);

  next();
};

// set up global middleware
server.use(logger);


function validateUserId(req, res, next){
  const id = req.params.id
  userRouter.getById(id)
  .then(user => {
    if (user) {
      user = req.user;
    } else if (!user) {
      res.status(404).json({error: "User with id does not exist"})
    }
  }
)}

function validateUser(req, res, next){

}

function validatePost(req, res, next){

}

module.exports = server;
// Write and implement four custom middleware functions, detailed below.
// Custom Middleware Requirements:

// ***** validateUserId() *****
// - validateUserId validates the user id on every request that expects a user id parameter
// - if the id parameter is valid, store that user object as req.user
// - if the id parameter does not match any user id in the database, cancel the request and 
//   respond with status 400 and { message: "invalid user id" }

// ***** validateUser() *****
// - validateUser validates the body on a request to create a new user
// - if the request body is missing, cancel the request and respond with status 400 and { message: "missing user data" }
// - if the request body is missing the required name field, cancel the request and respond 
//   with status 400 and { message: "missing required name field" }

// ***** validatePost() *****
// - validatePost validates the body on a request to create a new post
// - if the request body is missing, cancel the request and respond with status 400 and { message: "missing post data" }
// - if the request body is missing the required text field, cancel the request and 
//   respond with status 400 and { message: "missing required text field" }

// ***** logger() *****
// x logger logs to the console the following information about each request: 
//   request method, request url, and a timestamp
// x this middleware runs on every request made to the API