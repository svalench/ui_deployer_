<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="/"><logo></logo></b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/catalogs" :disabled="!$auth.loggedIn">Каталоги</b-nav-item>
          <b-nav-item href="#" :disabled="!$auth.loggedIn">Задания</b-nav-item>
        </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="$auth.loggedIn">
          <!-- Using 'button-content' slot -->
          <template #button-content >
            <em>{{$auth.user?$auth.user.username:''}}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout" href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Logo from "./logo";
export default {
  name: "navbar",
  components: {Logo},
  mounted() {
  },
  methods:{
    async logout(){
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped>

</style>
