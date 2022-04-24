const Task = require("../../models/task");

const findAllTasks = (req, res) => {
  Task.find({}).then((tasks) => {
    res.send(tasks);
  }).catch((error) => {
    res.status(500).send(error);
  }) 
};

const findTaskById = async (req, res) => {

  const { id } = req.params;

  try {
    
    const findTask = await Task.findById(id);

    res.send(findTask);

  } catch (error) {

    res.status(500).send(error);

  }

};

module.exports = {
  findAllTasks,
  findTaskById
};
