const express = require('express');

const postRouter = require('../posts/postRouter');
const userRouter = require('../users/userRouter');

const server = express();

function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
        'Origin'
      )}`
    );
  
    next();
}

// global middleware
server.use(express.json());
// server.use(uppercaser); // using custom middleware globally

// we can use middleware locally
server.use('/post', postRouter);
server.use('/user', userRouter);

// route handlers
server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

// export default server;
module.exports = server;

// logger()

// logger logs to the console the following information about each request: 
// request method, request url, and a timestamp
// this middleware runs on every request made to the API
