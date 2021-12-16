const express = require('express');
const bcrypt = require('bcryptjs')

const db = require('../data/database');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('welcome');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/signup', async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredConfrimEmail = userData['confirm-email']
  const enteredPassword = userData.password;

  if (!enteredEmail || !enteredPassword || enteredConfrimEmail || enteredPassword.trim() < 6 || enteredEmail !== enteredConfrimEmail || !enteredEmail.includes('@')) {
    console.log('inccorect data')
    return res.redirect('/signup')
  }

  const existingUser = await db.getDb.collection('users').findone({ email: enteredEmail })

const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  const user = {
     email: enteredEmail,
    password: hashedPassword,
  }

  await db.getDb().collection('users').insertOne(user)

  res.redirect('/login');
});

router.post('/login', async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const existingUser = await db.getDb().collection('users').findOne({ email: enter})
  if (!existingUser) {
    console.log('couldnt log in')
    return res.redirect('/login')
  }

  const passwordsAreEqual = await bcrypt.compare(enteredPassword, existingUser.password);
  if (!passwordsAreEqual) {
    console.log('couldnt log in')
    return res.redirect('/login')

    res.redirect('/admin' )
  }

});

router.get('/admin', function (req, res) {
  if (!req.session.isAuthenticated){
    return res.status401.render('401')
  }
  res.render('admin');
});

router.post('/logout', function (req, res) {});

module.exports = router;
