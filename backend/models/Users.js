const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  registration: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  //Board, ManComm or WorkComm
  clearance: {
    type: String,
    required: true
  },
  //For Board, what position do they hold
  position: {
    type: String,
    required: true,
    unique: true
  },
  //whether the person is approved for editorial posts
  editorial: {
    type: Boolean,
    default: false
  },
  //user image
  avatar: {
    type: String
  },
  //date of registration
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
