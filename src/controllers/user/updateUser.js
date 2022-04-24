const User = require("../../models/user");

const updateUser = async (req, res) => {

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