<template>
  <div class="wrapper-nav">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <h1>My TODO List</h1>
      </div>
      <div class="navigation">
        <ul class="nav">
          <li class="nav-item">
            <nuxt-link active-class="active" exact class="nav-link" to="/"
              >Hello {{ userName }}</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" exact class="nav-link" to="/login"
              >Login</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Vanya Tsimbal',
    }
  },
}
</script>

<style scoped lang="scss">
.wrapper-nav {
  background-color: #0c5460;
  border-radius: 0 0 5px 5px;
  margin: 0 10px;
  padding: 10px 0;

  .container {
    .logo {
      h1 {
        color: white;
      }
    }

    .navigation {
      .nav {
        .nav-item {
          .nav-link {
            color: white;

            &.active {
              background-color: #097081;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
