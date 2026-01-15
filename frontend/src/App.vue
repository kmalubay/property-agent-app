<template>
  <div id="app">
    <AgentPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AgentPage from './components/AgentPage.vue'

export default defineComponent({
  components: { AgentPage }
})
</script>
