import express from "express";
import cors from "cors";
import agentRoutes from "./routes/agent.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/agents", agentRoutes);

export default app;
