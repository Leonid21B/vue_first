<template>
  <div class="column-inputs">
    <h1 class="person-column__title">Email и номер телефона</h1>
      <v-text-field
          v-model="email"
          :counter="10"
          :rules="emailRules"
          label="Email"
          required
          class="input"
        ></v-text-field>
      <v-text-field
        v-model="phone"
        :rules="phoneRules"
        label="Номер телефона"
        required
        class="input"
      ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'PhoneColumn',
  
  data: () => ({
    phone:'',
    email:'',
    phoneRules:[
      v => v.length >= 10 || 'Phone is not valid'
    ],
    emailRules:[
      v => v.length > 5 || 'Email is not valid',
      v => v.indexOf('@') > 0 || 'Email is not valid'
    ]
  }),
  created(){
    this.$watch('phone', (value) => {
       this.$emit('setField', {value,name:'phone'});
    })
    this.$watch('email', (value) => {
       this.$emit('setField',{value,name:'email'});
    })
  }
}
</script>
<style>
  .person-column__title{
    text-align:center;
  }
  
</style>