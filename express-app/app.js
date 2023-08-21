var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ---------------------------
// Define your MongoDB schema and model here
const userSchema = new mongoose.Schema({
  empid: Number,
  name: String,
  emailid: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

app.get('/http-method', (req, res) => {
  res.status(200).json("GET METHOD");
});
app.put('/http-method', (req, res) => {
  res.status(200).json("PUT METHOD");
});
app.post('/http-method', (req, res) => {
  res.status(200).json("POST METHOD");
});
app.delete('/http-method', (req, res) => {
  res.status(200).json("DELETE METHOD");
});


app.post('/add', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user' });
  }
});

app.get('/view', (req, res) => {
  User.find({})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error fetching users' });
    });
});

app.post('/login', (req, res) => {
  const { emailid, password } = req.body;

  User.findOne({ emailid, password })
    .then(user => {
      if (user) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error while logging in' });
    });
});

app.get('/search/:empid', (req, res) => {
  const empidToSearch = req.params.empid;

  User.findOne({ empid: empidToSearch })
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error searching for user' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// ---------------------------
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
