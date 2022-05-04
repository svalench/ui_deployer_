<template>
<b-container>
  <b-card class="login-card">
  <b-card-title class="login-title">
    <logo></logo>
  </b-card-title>
    <b-card-body class="card-input-body">
      <b-row>
        <b-col>
          <b-input placeholder="логин" v-model="login.username" class="form-input"></b-input>
          <b-input type="password" placeholder="пароль" v-model="login.password" class="form-input"></b-input>
        </b-col>
        <b-col>
          <b-button type="danger" @click="userLogin" class="btn-submit">Вход</b-button>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</b-container>
</template>

<script>
import Logo from "../components/global/logo";
export default {
  name: "login",
  components: {Logo},
  data(){
      return{
        login: {
        username: '',
        password: ''
      },
        titleToasts: "Авторизация"
      }
  },
  mounted() {
    if(this.$auth.loggedIn){
       this.$router.push({path:'/'})
    }
  },
  methods: {
     async userLogin() {
       const form = new FormData()

        form.append("username", this.login.username)
        form.append("password", this.login.password)
       try {
         let response = await this.$auth.loginWith('local', {data: form})
         this.$toast({text:"Успешно", title:this.titleToasts, variant:"success"})
       } catch (err) {
         console.log(err)
         console.log(err.response)
         if(err.response.status === 401){
           this.$toast({text:"Отказано в доступе", title:this.titleToasts, variant:"warning"});
           this.$router.go({path: '/'})
         }else if(err.response.status === 422){
           this.$toast({text:"Ошибка авторизации. Обратитесь к администратору", title:this.titleToasts, variant:"danger"})
         }else{
           this.$toast({text:"Неизвестная ошибка. Обратитесь к администратору", title:this.titleToasts, variant:"danger"})
         }

       }
     },
   }
}
</script>

<style scoped>
.card-body{
  padding: 0;
}
.login-card{
  padding: 0;
  margin-top: 30px;
  min-height: 300px;
  -webkit-box-shadow: 20px 31px 38px 4px rgba(169, 124, 122, 0.35);
  -moz-box-shadow: 20px 31px 38px 4px rgba(169, 124, 122, 0.35);
  box-shadow: 20px 31px 38px 4px rgba(169, 124, 122, 0.35);
  border-radius: 10px;
  border: #fd0000;
}
.login-title{
  text-align: center;
  background-color: #dc3545;
  color: white;
  margin: 0;
  padding: 10px;
}
.card-input-body{
  padding: 30px;
}
.form-input{
  margin-top: 15px;
  max-width: 400px;
}
.btn-submit{
  width: 100%;
  margin-top: 15px;
    background-color: #dc3545;
}
</style>
