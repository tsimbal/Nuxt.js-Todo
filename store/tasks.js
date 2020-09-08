// import firebase from '@/plugins/firebase'
export const state = () => ({
  tasks: [],
})

export const mutations = {
  fetchTodo(state, payload) {
    state.tasks = payload
  },

  newTask(state, payload) {
    state.tasks.unshift(payload)
  },

  updateTodo(state, payload) {
    let task = state.tasks.find((t) => t.id === payload.id)
    task.title = payload.title
    if (payload.completed === true) {
      task.completed = false
    }
  },

  deleteTask(state, id) {
    let delId = state.tasks.findIndex((t) => t.id === id)
    state.tasks.splice(delId, 1)
  },

  completedTask(state, { id, completed }) {
    let task = state.tasks.find((t) => t.id === id)
    task.completed = completed
  },
}

export const actions = {
  async FETCH_TODOS({ commit }) {
    try {
      const taskArr = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1'
      )

      commit('fetchTodo', taskArr.data)
    } catch (e) {
      console.error(e)

      throw e
    }
  },

  async NEW_TASK({ commit }, payload) {
    try {
      const newTask = {
        title: payload.title,
        completed: payload.completed,
        userId: 1,
      }

      const postTask = await this.$axios.$post(
        'https://jsonplaceholder.typicode.com/todos',
        newTask
      )

      console.log(postTask)

      commit('newTask', postTask)
      // commit('fetchTodo', postTask)
    } catch (e) {
      console.error('Error' + e)

      throw e
    }
  },

  async UPDATE_TODO({ commit }, { id, title, completed }) {
    try {
      const upTask = await this.$axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { title, completed }
      )

      commit('updateTodo', upTask.data)
    } catch (e) {
      console.error('Error' + e)

      throw e
    }
  },

  async DELETE_TASK({ commit }, id) {
    try {
      await this.$axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      )

      commit('deleteTask', id)
    } catch (e) {
      console.error('Error' + e)

      throw e
    }
  },

  async COMPLETED_TASK({ commit }, { id, completed }) {
    try {
      await this.$axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { completed }
      )

      commit('completedTask', { id, completed })
    } catch (e) {
      console.error('Error' + e)

      throw e
    }
  },
}

export const getters = {
  tasks: (state) => state.tasks,
}
