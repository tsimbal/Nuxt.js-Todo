<template>
  <div>
    <h1>Error 404</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'error',
}
</script>

<style scoped>
div {
  width: 800px;
  margin: 0 auto;
}

h1 {
  color: red;
  font-size: 48px;
}
</style>
