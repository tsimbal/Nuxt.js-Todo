<template>
  <div class="container my-container">
    <form @submit.prevent="loginUser">
      <h1>Login</h1>

      <div class="form-group">
        <input
          type="text"
          placeholder="User Name"
          class="form-control"
          v-model="userName"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          class="form-control"
          v-model="userPassword"
        />
      </div>
      <div class="form-group">
        <input
          type="checkbox"
          class="mr-1"
          id="rememberMe"
          v-model="rememberMe"
        />
        <label for="rememberMe">Remember me</label>
      </div>
      <button type="submit" class="btn btn-info w-100">Login</button>
      <div class="reg d-flex align-items-center">
        <span>Don`t have account?</span
        ><nuxt-link
          exact
          active-class="active"
          class="nav-link pl-1"
          to="/registration"
          >Sign up</nuxt-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      userName: '',
      userPassword: '',
      rememberMe: false,
    }
  },

  methods: {
    loginUser() {
      const user = {
        name: this.userName,
        password: this.userPassword,
        rememberMe: this.rememberMe,
      }
      console.log(user)
    },
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

.my-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;

  form {
    border: 2px solid #097081;
    background-color: beige;
    width: 400px;
    border-radius: 100px 0 100px 0;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      margin: 0 0 20px 0;
      font-family: 'Indie Flower', sans-serif;
      font-size: 60px;
    }

    .form-group {
      width: 100%;

      .form-control {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        background-color: transparent;
      }
    }

    button {
      border-radius: 20px;
    }

    .reg {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
