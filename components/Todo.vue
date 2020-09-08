<template>
  <li class="list-group-item d-flex align-items-center justify-content-between">
    <div class="left-list-group d-flex align-items-center">
      <div v-if="isEditing" class="edit">
        <input
          type="text"
          class="form-control"
          v-model="newTaskTitle"
          @blur="finishEdit()"
          ref="focusEdit"
        />
      </div>
      <div v-else class="show-task d-flex align-items-center">
        <input
          type="checkbox"
          class="mr-2"
          @click="$emit('on-complete-task')"
          :checked="completed"
        />
        <p class="task" :class="{ completedTask: completed }">{{ task }}</p>
      </div>
    </div>
    <div class="right-list-group">
      <button @click="editTask()" class="btn btn-outline-info my-btn">
        <f-icon icon="edit"></f-icon>
      </button>
      <button
        class="btn btn-outline-danger my-btn ml-2"
        @click.prevent="$emit('on-delete-task')"
      >
        <f-icon icon="trash"></f-icon>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    completed: Boolean,
    task: String,
    id: null,
  },

  data() {
    return {
      newTaskTitle: '',
      isEditing: false,
    }
  },

  methods: {
    finishEdit() {
      this.isEditing = false
      this.$emit('onEditTask', this.newTaskTitle)
    },

    editTask() {
      this.isEditing = true
      this.newTaskTitle = this.task
      this.$nextTick(() => this.$refs.focusEdit.focus())
    },
  },
}
</script>

<style scoped lang="scss">
.list-group {
  .list-group-item {
    .left-list-group {
      .edit {
        .form-control {
          background-color: transparent;
          width: 350px;
        }
      }
    }

    background-color: beige;

    p {
      margin-bottom: 0;
      font-size: 16px;
      font-family: 'Comic Sans MS', sans-serif;
    }

    .completedTask {
      text-decoration: line-through;
    }

    .my-btn {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
