<template>
  <header class='header'>
    <v-btn height="50px" width="150px" class="header__btn">ГЛАВНАЯ</v-btn>
    <v-btn height="50px" width="150px" class="header__btn">СПИСОК КУРСОВ</v-btn>
    <v-btn height="50px" width="150px" class="header__btn">НАСТРОЙКИ</v-btn>
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
</style>