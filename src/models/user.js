const mongoose = require("mongoose");

const { 
  verifyValidEmail,
  verifyPasswordStrength,
  verifyPasswordIncludesPassword,
  validAge
} = require('../middlewares/userValidations/createUserValidations');

const userModel = {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      validAge(value)
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      verifyValidEmail(value)
    }
  },
  password: {
    type: String,
    trim: true,
    required: true,
    select: true,
    validate(value) {
      verifyPasswordStrength(value);
      verifyPasswordIncludesPassword(value)
    }
  }
  
};

const User = mongoose.model('User', userModel);

module.exports = User;