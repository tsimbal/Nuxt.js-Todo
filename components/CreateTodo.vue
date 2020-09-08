<template>
  <div class="addTasks">
    <form @submit.prevent="addTask" class="d-flex">
      <div class="form-group mb-0">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your task"
          v-model="newTaskText"
        />
      </div>
      <button type="submit" class="btn btn-info">
        Add Task
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateTodo',
  data() {
    return {
      newTaskText: '',
    }
  },

  methods: {
    addTask() {
      if (this.newTaskText !== '') {
        this.$eventBus.$emit('onAddTask', this.newTaskText)
      } else {
        console.log('error')
      }

      this.newTaskText = ''
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  .addTasks {
    .form-group {
      width: 50%;
    }
  }
}
</style>
