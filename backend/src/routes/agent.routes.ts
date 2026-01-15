import { Router } from "express";
import { agentStore, isEmailTaken } from "../store/agent.store";
import { PropertyAgent } from "../models/PropertyAgent";

const router = Router();

/**
 * Create or Update Agent (Upsert)
 */
router.post("/", (req, res) => {
  const { id, firstName, lastName, email, mobileNumber } = req.body;

  if (!id || !email) {
    return res.status(400).json({ message: "id and email are required" });
  }

  if (isEmailTaken(email, id)) {
    return res.status(409).json({ message: "email already exists" });
  }

  const now = new Date();
  const existing = agentStore.get(id);

  const agent: PropertyAgent = {
    id,
    firstName,
    lastName,
    email,
    mobileNumber,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };

  agentStore.set(id, agent);

  res.status(existing ? 200 : 201).json(agent);
});

/**
 * Get all agents
 */
router.get("/", (_req, res) => {
  res.json(Array.from(agentStore.values()));
});

/**
 * Get single agent
 */
router.get("/:id", (req, res) => {
  const agent = agentStore.get(req.params.id);
  if (!agent) return res.status(404).json({ message: "Agent not found" });
  res.json(agent);
});

/**
 * Delete agent
 */
router.delete("/:id", (req, res) => {
  if (!agentStore.has(req.params.id)) {
    return res.status(404).json({ message: "Agent not found" });
  }
  agentStore.delete(req.params.id);
  res.status(204).send();
});

export default router;
