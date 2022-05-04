<template>
  <div>
      <catalog-navigate @serversGet="getServers" @usersGet="getUsersList"></catalog-navigate>
      <div>
          <b-table striped hover :items="items"></b-table>
      </div>
  </div>

</template>

<script>
import CatalogNavigate from "../components/catalogNavigate";
export default {
  name: "catalogs",
  components: {CatalogNavigate},
  data(){
    return{
      items: [],
    }
  },
  async mounted() {
    this.items = await this.$store.dispatch('api/getUsersList')
  },
  methods:{
    async getServers(){
      this.items = await this.$store.dispatch('api/getServersList')
    },
    async getUsersList(){
      this.items = await this.$store.dispatch('api/getUsersList')
    }
  }
}
</script>

<style scoped>

</style>
