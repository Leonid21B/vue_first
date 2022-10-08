<template>
  <v-app >
    <main-header/>
    <wrapper/>
    <main-footer/>
  </v-app>
</template>

<script>
import MainHeader from './components/Header/Header.vue'
import MainFooter from './components/Footer/Footer.vue'
import Wrapper from './components/Wrapper/Wrapper.vue'

export default {
  name: 'App',

  components: {
    MainHeader,
    MainFooter,
    Wrapper
},

  data: () => ({
    //
  }),
}
</script>

<style>
  *{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  .v-application__wrap{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>