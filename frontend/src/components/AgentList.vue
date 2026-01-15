<template>
  <div class="container">
    <h2>Agent List</h2>
    <div v-if="selectedAgent" class="container" style="margin-top:20px;">
      <h3>Selected Agent</h3>
      <p><strong>ID:</strong> {{ selectedAgent.id }}</p>
      <p><strong>Name:</strong> {{ selectedAgent.firstName }} {{ selectedAgent.lastName }}</p>
      <p><strong>Email:</strong> {{ selectedAgent.email }}</p>
      <p><strong>Mobile:</strong> {{ selectedAgent.mobileNumber }}</p>
      <p><strong>Created At:</strong> {{ selectedAgent.createdAt }}</p>
      <p><strong>Updated At:</strong> {{ selectedAgent.updatedAt }}</p>
    </div>

    <div v-for="agent in agents" :key="agent.id" class="agent-card">
      <div>
        <strong>{{ agent.firstName }} {{ agent.lastName }}</strong>
        <div>{{ agent.email }}</div>
      </div>
      <div>
        <button @click="$emit('view', agent.id)" class="view">View</button>
        <button @click="$emit('delete', agent.id)" class="delete">Delete</button>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Agent } from '../services/agent.service'

export default defineComponent({
  props: {
    agents: { type: Array as PropType<Agent[]>, required: true },
    selectedAgent: { type: Object as PropType<Agent | null>, default: null }
  }
})
</script>
