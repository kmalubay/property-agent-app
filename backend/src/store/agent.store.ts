import { PropertyAgent } from "../models/PropertyAgent";

export const agentStore = new Map<string, PropertyAgent>();

// Function to check if email already exists
export const isEmailTaken = (email: string, id?: string): boolean => {
  for (const agent of agentStore.values()) {
    if (agent.email === email && agent.id !== id) {
      return true;
    }
  }
  return false;
};
