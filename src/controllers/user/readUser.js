const User = require("../../models/user");

const bcrypt = require('bcrypt');

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
    console.log(findUser.password)
    let senha = 'Info@1234'
    const resultado = bcrypt.compareSync(senha,findUser.password);
    console.log(resultado)
    if(resultado == true) {
      return res.send(senha)
    }
    if(!resultado) return res.send("senha incorreta")
    // res.send(findUser.password);
    
  } catch (error) {

    res.status(500).send(error);

  }
}

module.exports = {
  findAllUsers,
  findUserById
}