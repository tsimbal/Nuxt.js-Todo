<template>
  <div class="main-wrapper">
    <Nav />
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Nav from '~/components/Nav'
export default {
  data() {
    return {}
  },
  components: {
    Nav,
  },
}
</script>

<style lang="scss" scoped></style>
