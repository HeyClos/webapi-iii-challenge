const express = 'express';

const Posts = require('../posts/postDb');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        const posts = await Posts.get(req.query);
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({
          message: 'Error retrieving the posts',
        });
      }
});

router.get('/:id', (req, res) => {
    try {
        const post = await Posts.getById(req.params.id);
    
        if (post) {
          res.status(200).json(post);
        } else {
          res.status(404).json({ message: 'post not found' });
        }
      } catch (error) {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'WRONG! YOU LOSER!',
        });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const count = await Posts.remove(req.params.id);
        if (count > 0) {
          res.status(200).json({ message: 'The post has been nuked' });
        } else {
          res.status(404).json({ message: 'The post could not be found' });
        }
      } catch (error) {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'CANNOT REMOVE! AH ',
        });
    }
});

router.put('/:id', (req, res) => {
    try {
        const post = await Posts.update(req.params.id, req.body);
        if (post) {
          res.status(200).json(post);
        } else {
          res.status(404).json({ message: 'The post could not be found' });
        }
      } catch (error) {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'Error updating the post',
        });
    }
});

// custom middleware

function validatePostId(req, res, next) {
  const { id } = req.params;
  Posts.getById(id)
    .then(post => {
      if (post) {
        req.hub = post;
        next();
      } else {
        next({ message: 'Invalid id; post not found'})
      }
    })
    .catch (error => {
      console.log(error);
      res.status(500).json({ message: 'Failed to process request' });
    })
};


module.exports = router;