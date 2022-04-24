const Task = require("../../models/task");

const deleteTask = async (req, res) => {

  try {

    const deleteTask = await Task.findByIdAndDelete(req.params.id);

    res.send(deleteTask);

  } catch (error) {

    res.status(500).send();
    
  }
}

module.exports = deleteTask;