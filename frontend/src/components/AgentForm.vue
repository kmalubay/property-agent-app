<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <h2>Create / Update Agent</h2>
      <input v-model="agent.id" placeholder="ID" required />
      <input v-model="agent.firstName" placeholder="First Name" />
      <input v-model="agent.lastName" placeholder="Last Name" />
      <input v-model="agent.email" placeholder="Email" required />
      <input v-model="agent.mobileNumber" placeholder="Mobile Number" />
      <button type="submit" class="save">Save</button>
    </form>
  </div>
</template>

<script lang="ts">
/* eslint-disable */ 
import { defineComponent, reactive } from "vue";
import { Agent, createOrUpdateAgent } from "../services/agent.service";

export default defineComponent({
  emits: ["saved"], // <-- declare the saved event
  setup(_, { emit }) {
    const agent = reactive<Agent>({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: ""
    });

    const submitForm = async () => {
      try {
        await createOrUpdateAgent(agent);
        alert("Agent saved successfully!");

        // Emit the saved event to notify parent
        emit("saved");

        // Clear form after saving
        agent.id = "";
        agent.firstName = "";
        agent.lastName = "";
        agent.email = "";
        agent.mobileNumber = "";
      } catch (err: any) {
        alert("Error: " + err.response?.data?.message || err.message);
      }
    };

    return { agent, submitForm };
  }
});
</script>

<style scoped>
.agent-form input { display:block; margin:5px 0; padding:5px; width:200px; }
.agent-form button { margin-top:10px; padding:5px 10px; }
</style>
