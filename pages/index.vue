<template>
  <div>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  components: { TodoList },
  async fetch({ store }) {
    if (store.getters['tasks/tasks'].length === 0) {
      await store.dispatch('tasks/FETCH_TODOS')
    }
  },

  data() {
    return {}
  },
}
</script>

<style></style>
