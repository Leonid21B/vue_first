<template>
  <v-app >
    <div class="container">
      <header-main/>
      <router-view/>
      <footer-main/>
    </div>
  </v-app>
</template>
<script>
  import HeaderMain from './components/Header/Header.vue' 
  import FooterMain from './components/Footer/Footer.vue' 
  export default {
    components:{
      HeaderMain,
      FooterMain
    }
  }
</script>
<style>
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
