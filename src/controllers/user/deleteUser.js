const User = require("../../models/user");

const deleteUser = async (req, res) => {

  try {

    const deleteUser = await User.findByIdAndDelete(req.params.id);

    res.send(deleteUser);

  } catch (error) {

    res.status(500).send();
    
  }
}

module.exports = deleteUser;