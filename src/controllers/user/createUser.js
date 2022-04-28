const User = require("../../models/user");

const bcrypt = require('bcrypt');

const createUser = async (req, res) => {

  const user = new User(req.body);
  // console.log(user.password);
  const hash = bcrypt.hashSync(user.password, 8);
  // console.log(hash)
  user.password = hash
  // console.log(user.password)
  try {
      
      await user.save();
      res.status(201).send(user);

  } catch (error) {

      res.status(400).send(error);
 
  }
    
};

module.exports = createUser;