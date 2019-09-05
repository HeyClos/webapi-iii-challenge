// 1. Add endpoints to retrieve the list of 
//`posts` for a `user` and to store a new `post` 
// for a `user`.

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

// validatePost()
// validatePost validates the body on a request to create a new post
// if the request body is missing, cancel the request and respond with 
// status 400 and { message: "missing post data" }
// if the request body is missing the required text field, cancel the 
// request and respond with status 400 and { message: "missing required text field" }

function validatePostId(req, res, next) {

};

module.exports = router;