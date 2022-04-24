require('./db/mongoose');
const express = require("express");

const userRoutes = require("./routes/userRoutes");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRoutes);

app.use(taskRoutes);

app.listen(port, console.log('o pai ta on na ' + port));
