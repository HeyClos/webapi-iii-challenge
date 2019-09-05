const express = require('express');

const router = express.Router();

const db = require('./userDb');

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    res.send('get to /users');
});

router.get('/:id', validateUserId, (req, res) => {
    res.send(`get to /users/${req.id}`)
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    userDb.getById(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json({
            error: 'There was an error retrieving the user information.'
        })
    })
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

// validateUserId()

// validateUserId validates the user id on every request that expects a user id parameter
// if the id parameter is valid, store that user object as req.user
// if the id parameter does not match any user id in the database, cancel the request and 
// respond with status 400 and { message: "invalid user id" }
function validateUserId(req, res, next) {
    //console.log(db.getById(req.params.id))
    // if (req.params.id) {
    //     req.params.id = req.user
    // }
    // next();
    if(id){
        req.user
    }else{
        res.status(400).json({ message: "invalid user id" })
    };
    next();
};

// function uppercaser(req, res, next) {
//     let name = req.params.name;
//     console.log(req.params.name);
//     if (name) {
//       req.name = name.toUpperCase();
//     }
//     next();
//   }

// validateUser()

// validateUser validates the body on a request to create a new user
// if the request body is missing, cancel the request and respond with status 400 and 
// { message: "missing user data" }
// if the request body is missing the required name field, cancel the request and respond with status 400 and { message: "missing required name field" }

function validateUser(req, res, next) {
    next();
};

// validatePost()
// validatePost validates the body on a request to create a new post
// if the request body is missing, cancel the request and respond with 
// status 400 and { message: "missing post data" }
// if the request body is missing the required text field, cancel the 
// request and respond with status 400 and { message: "missing required text field" }

function validatePost(req, res, next) {
    next();
};

module.exports = router;
