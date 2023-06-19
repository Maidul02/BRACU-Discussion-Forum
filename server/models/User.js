const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'user must have a name']
  },

  displayName: {
    type: String,
    default: ''
  },

  about: {
    type: String,
    default: ''
  },

  gender: {
    type: String,
    default: 'male'
  },

  githubLink: {
    type: 'String',
    default: ''
  },

  linkedInLink: {
    type: String,
    default: ''
  },

  technicalSkills: {
    type: Array,
    default: []
  },

  email: {
    type: String,
    required: [true, 'user must provide an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide a valid email']
  },

  photo: {
    type: String,
    default: process.env.DEFAULT_PROFILE_PIC
  },

  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8
  },

  role: {
    type: String,
    enum: ['user', 'faculty', 'admin'],
    default: 'user'
  },

  posts: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post'
  },

  favourites: {
    type: Array,
    default: []
  },

  materialCount: {
    type: Number,
    default: 0
  },

  doubtsCount: {
    type: Number,
    default: 0
  },

  repliesCount: {
    type: Number,
    default: 0
  },

  reputation: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);
