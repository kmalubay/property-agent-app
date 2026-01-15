const { PropertyAgentData } = require("../models/PropertyAgent");

const agentMap = new Map();

function checkEmailTaken(email, id) {
  for (const agent of agentStore.values()) {
    if (agent.email === email && agent.id !== id) return true;
  }
  return false;
}

module.exports = { agentMap, checkEmailTaken };