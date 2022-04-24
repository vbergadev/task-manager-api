const Task = require("../../models/task");

const createTask = async (req, res) => {
  
  const task = new Task(req.body);

  try {

    const saveTask = await task.save();

    res.status(201).send(saveTask);   

  } catch (error) {

    res.status(400).send(error);

  }

};

module.exports = createTask;
