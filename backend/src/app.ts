const express = require("express");
const cors = require("cors");
const agentRoutes = require("./routes/agent.routes");

const backendApp = express(); // renamed variable

backendApp.use(cors());
backendApp.use(express.json());

backendApp.use("/agents", agentRoutes);

module.exports = backendApp;