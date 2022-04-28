const User = require("../../models/user");

const bcrypt = require('bcrypt');

const updateUser = async (req, res) => {

  /*
    if(!findUser) return res.status(404).send();
    console.log(findUser.password)
    let senha = 'Info@1234'
    const resultado = bcrypt.compareSync(senha,findUser.password);
    console.log(resultado)
    if(resultado == true) {
      return res.send(senha)
    }
    if(!resultado) return res.send("senha incorreta")
  */

  const fields = Object.keys(req.body);
  const fieldsAllowToUpdate = ["name", "age", "email", "password"]
  const checkIfFieldIsAllowed = fields.every((field) => {
    return fieldsAllowToUpdate.includes(field)
  });

  if(!checkIfFieldIsAllowed) return res.status(400).send({error: "Invalid Fields"})

  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if(!updateUser) return res.status(404).send();
    
    res.send(updateUser)
  } catch (error) {
    res.status(500).send()
  }
}

module.exports = updateUser;