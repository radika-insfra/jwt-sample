const express = require('express');
const bodyParser = require('body-parser');
const { verifyToken } = require('./authMiddleware');
const jwt = require('jsonwebtoken');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

// Set up middleware to parse JSON request bodies
app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Replace with your own authentication logic here

  // find user by email
  // match passward on the db with req.body.password
  // send required information

  if (email === 'john@example.com' && password === 'password123') {
    const token = jwt.sign({ userId: 123, isAdmin: false }, process.env.SECRETKEY);
    res.json({ token });
  } else if (email === 'radika@example.com' && password === 'password123') {
    const token = jwt.sign({ userId: 123, isAdmin: true }, process.env.SECRETKEY);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected endpoint
app.get('/protected', verifyToken, (req, res) => {
  if (req.user.isAdmin) {
    res.json({ message: 'This endpoint is Admin!', user: req.user });
  } else {
    res.json({ message: 'This endpoint is protected!', user: req.user });
  }
});

//issued at  iat 1683451782

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
