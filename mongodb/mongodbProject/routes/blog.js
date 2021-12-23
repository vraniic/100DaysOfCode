const express = require('express');

const db = require('../data/dataBase')

const router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/posts');
});

router.get('/posts', function(req, res) {
  res.render('posts-list');
});

router.get('/new-post', async function(req, res) {db.getDb

  res.render('create-post');
});

module.exports = router;