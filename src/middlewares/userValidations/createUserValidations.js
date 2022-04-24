const validator = require('validator');

const verifyValidEmail = (email) => {
  if(!validator.isEmail(email)) {
    throw new Error(`${email} is not a valid email adress`)
  }
};

const verifyPasswordStrength = (password) => {
  if(!validator.isStrongPassword(password)) {
    throw new Error('nao é forte')
  }
};

const verifyPasswordIncludesPassword = (password) => {
  const containPassword = password.includes('password');
  if(containPassword) {
    console.log(containPassword)
    throw new Error('Nao pode usar a palavra password')
  }
};

const validAge = (age) => {
  if(age < 0) {
    throw new Error('Not valid age')
  }
}
module.exports = {
  verifyValidEmail,
  verifyPasswordStrength,
  verifyPasswordIncludesPassword,
  validAge
};
