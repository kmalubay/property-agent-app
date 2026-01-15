<template>
  <div>
    <!-- Listen for saved to reload -->
    <AgentForm @saved="reloadAgents" />

    <!-- Listen for view and delete -->
    <AgentList
      :agents="agents"
      :selectedAgent="selectedAgent"
      @view="viewAgent"
      @delete="deleteAgent"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import AgentForm from './AgentForm.vue'
import AgentList from './AgentList.vue'
import { Agent, getAgents, getAgent, deleteAgent as removeAgentService } from '../services/agent.service'

export default defineComponent({
  components: { AgentForm, AgentList },
  setup () {
    const agents = ref<Agent[]>([])
    const selectedAgent = ref<Agent | null>(null)

    const reloadAgents = async () => {
      const res = await getAgents()
      agents.value = res.data
    }

    const viewAgent = async (id: string) => {
      const res = await getAgent(id)
      selectedAgent.value = res.data // <- update selected agent
    }

    const deleteAgent = async (id: string) => {
      await removeAgentService(id)
      if (selectedAgent.value?.id === id) selectedAgent.value = null
      await reloadAgents()
      alert('Agent deleted!')
    }

    onMounted(reloadAgents)

    return { agents, selectedAgent, reloadAgents, viewAgent, deleteAgent }
  }
})
</script>
