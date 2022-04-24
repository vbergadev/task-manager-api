const express = require("express");

const userRoutes = new express.Router();

const createUser  = require("../controllers/user/createUser");

const { findAllUsers, findUserById }  = require("../controllers/user/readUser");

const updateUser  = require("../controllers/user/updateUser");

const deleteUser  = require("../controllers/user/deleteUser");

userRoutes.post('/users', createUser);

userRoutes.get('/users', findAllUsers);

userRoutes.get('/users/:id', findUserById);

userRoutes.patch('/users/:id', updateUser);

userRoutes.delete('/users/:id', deleteUser);


module.exports = userRoutes;