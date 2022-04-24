const Task = require("../../models/task");

const updateTask = async (req, res) => {

  const fields = Object.keys(req.body);

  const fieldsAllowToUpdate = ["description", "isDone"];

  const checkIfFieldIsAllowed = fields.every((field) => {

    return fieldsAllowToUpdate.includes(field);

  });

  if(!checkIfFieldIsAllowed) return res.status(400).send({error: "Invalid Fields"})

  try {

    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if(!updateTask) return res.status(404).send();

    res.send(updateTask);

  } catch (error) {

    res.status(500).send();

  }
  
}

module.exports = updateTask;