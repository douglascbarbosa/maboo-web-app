<template>
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
  <div>
    <p>Welcome to Maboo</p>
    <router-link to="/login">Login</router-link>
    <br>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//
// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
</script>
