<template>
  <div class="container">
    <CreateTodo />
    <div class="todolist mt-2 p-0">
      <div class="title">
        <h3>Day</h3>
      </div>
      <div class="list">
        <ul class="list-group list-group-vertical-sm">
          <Todo
            v-for="(item, index) of listElem"
            :key="index"
            :task="item.title"
            :completed="item.completed"
            :id="item.id"
            :item="item"
            @on-delete-task="deleteTask(item)"
            @on-complete-task="completeTask(item)"
            @onEditTask="editTask(item, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CreateTodo from '@/components/CreateTodo'
import Todo from '@/components/Todo'

export default {
  name: 'TodoList',
  data() {
    return {
      taskId: null,
    }
  },

  computed: {
    listElem() {
      return this.$store.getters['tasks/tasks']
    },
  },

  methods: {
    addTask(elem) {
      const newTask = {
        title: elem,
        completed: false,
      }

      this.$store.dispatch('tasks/NEW_TASK', newTask)
    },

    deleteTask(item) {
      this.$store.dispatch('tasks/DELETE_TASK', item.id)
    },

    completeTask(item) {
      this.$store.dispatch('tasks/COMPLETED_TASK', {
        id: item.id,
        completed: !item.completed,
      })
    },

    editTask(item, newTaskTitle) {
      this.$store.dispatch('tasks/UPDATE_TODO', {
        title: newTaskTitle,
        id: item.id,
        completed: item.completed,
      })
    },
  },

  created() {
    this.$eventBus.$on('onAddTask', this.addTask)
  },

  components: {
    CreateTodo,
    Todo,
  },
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 20px;

  .todolist {
    border: 1px solid #0c5460;
    border-radius: 5px;

    .title {
      background-color: #0c5460;

      h3 {
        margin-bottom: 0;
        color: white;
        padding: 10px;
      }
    }
  }
}
</style>
