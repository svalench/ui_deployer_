<template>
<div>
  <b-navbar class="navigate" id="sidebar-right-catalog"  toggleable="lg" type="dark" style="background-color: #dc35458a;">
     <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="item-mavigator" href="#" @click="$emit('usersGet')" >Пользователи</b-nav-item>
          <b-nav-item href="#" @click="$emit('serversGet')">Сервера</b-nav-item>
          <b-nav-item href="#" @click="$emit('add')"><b-button variant="success">Добавить</b-button></b-nav-item>
        </b-navbar-nav>
     </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "catalogNavigate"
}
</script>

<style scoped>
.navigate{
  padding: 2px;
  color: #090909;
}
.navbar-nav{
  padding: 0;
}
.navbar-dark .navbar-nav .nav-link {
  padding-bottom: 0;
  color: #090909;
}
</style>
