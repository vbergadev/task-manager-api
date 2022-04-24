const User = require("../../models/user");

const findAllUsers = async (req, res) => {

  try {

    const findUsers = await User.find({});

    res.status(201).send(findUsers);

  } catch (error) {

    res.status(400).send(error);

  }

};

const findUserById = async (req, res) => {

  const { id } = req.params;

  try {

    const findUser = await User.findById(id);
    // if(!findUser) return res.status(404).send();

    res.send(findUser);
    
  } catch (error) {

    res.status(500).send(error);

  }
}

module.exports = {
  findAllUsers,
  findUserById
}