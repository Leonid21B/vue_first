<template>
  <div class="column-inputs">
    <h1 class="person-column__title">Email и номер телефона</h1>
      <v-text-field
        type="password"
        v-model="password"
        :counter="10"
        :rules="rules"
        label="Пароль"
        required
        class="input"
      />
      <v-text-field
        type="password"
        v-model="passwordCopy"
        :rules="copyRules"
        :counter="10"
        label="Повторите пароль"
        required
        class="input"
      />
  </div>
</template>

<script>
export default {
  name: 'PhoneColumn',
  
  data: () => ({
    password:'',
    passwordCopy:'', 
    rules:[
      v => v.length === 6 || 'Password should has 6 symbols'
    ],
    copyRules:[
    ],
  }),
  created(){
    this.$watch('password', (value) => {
       if(value !== this.passwordCopy){
        this.copyRules.push((v) => false || 'Passwords are different')
       }else{
        this.copyRules = []
       }
    })
    this.$watch('passwordCopy', (value) => {
       this.$emit('setField',{value,name:'password'})
       if(value !== this.password){
        this.copyRules.push((v) => false || 'Passwords are different')
       }else{
        this.copyRules = []
       }
    })
  }
}
</script>
<style>
  .person-column__title{
    text-align:center;
  }
  
</style>