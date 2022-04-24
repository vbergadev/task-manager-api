const express = require("express");

const taskRoutes = new express.Router();

const createTask  = require("../controllers/task/createTask");

const updateTask  = require("../controllers/task/updateTask");

const deleteTask  = require("../controllers/task/deleteTask");

const { findAllTasks, findTaskById } = require("../controllers/task/readTask");

taskRoutes.post('/tasks', createTask);

taskRoutes.get('/tasks', findAllTasks);

taskRoutes.get('/tasks/:id', findTaskById);

taskRoutes.patch('/tasks/:id', updateTask);

taskRoutes.delete('/tasks/:id', deleteTask);

module.exports = taskRoutes;