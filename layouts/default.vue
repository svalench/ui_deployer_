<template>
  <div>
    <navbar></navbar>
      <nuxt />
  </div>
</template>


<script>
import Navbar from "../components/global/navbar";
export default {
  name: "default",
  components: {Navbar}
}
</script>

<style scoped>

</style>
