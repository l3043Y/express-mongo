var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://kucp23cc007:0zPMJOVmxikZUJzc@cluster0.fc39xud.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

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

app.post('/add', async (req, res) => {
  try {
    // Check if the emailid already exists in the database
    const existingUser = await User.findOne({ emailid: req.body.emailid });

    if (existingUser) {
      return res.status(400).json({ message: 'EMAILID ALREADY REGISTERED' });
    }

    // If the emailid is not found, create a new user and save it
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
