/* eslint-disable */ 
import axios from "axios";

const API_URL = "http://localhost:3000/agents";

export interface Agent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  createdAt?: string;
  updatedAt?: string;
}

// CRUD calls
export const getAgents = () => axios.get<Agent[]>(API_URL);
export const getAgent = (id: string) => axios.get<Agent>(`${API_URL}/${id}`);
export const createOrUpdateAgent = (agent: Agent) => axios.post<Agent>(API_URL, agent);
export const deleteAgent = (id: string) => axios.delete(`${API_URL}/${id}`);
