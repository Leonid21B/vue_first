<template>
  <header class='header'>
    <router-link class="header__link" to="/">
      <v-btn height="50px" width="150px" class="header__btn">ГЛАВНАЯ</v-btn>
    </router-link>
    <router-link class="header__link" to="/courses-list">
      <v-btn height="50px" width="150px" class="header__btn">СПИСОК КУРСОВ</v-btn>
    </router-link>
    <router-link class="header__link" to="/courses-list">
      <v-btn height="50px" width="150px" class="header__btn">НАСТРОЙКИ</v-btn>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',


  data: () => ({
    //
  }),
}
</script>
<style>
  .header{
    display: flex;
    box-sizing: border-box;
    width: 100vw;
    height: 143px;
    background: #1867C0;
    align-items: center;
    padding-left: 20vw;
  }
  .header__btn{
    
    margin-right: 10vw;
  }
  .header__link{
    text-decoration: none;
    color:black;
  }
</style>