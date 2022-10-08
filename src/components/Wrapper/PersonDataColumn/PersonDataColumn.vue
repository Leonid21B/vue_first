<template>
  <div class="column-inputs">
    <h1 class="person-column__title">ФИО</h1>
    <v-text-field
        v-model="name"
        :counter="10"
        :rules="rules"
        label="Name"
        required
        class="input"
      />
    <v-text-field
      v-model="surName"
      :counter="10"
      :rules="rules"
      label="Surname"
      required
      class="input"
    />
    <v-text-field
      v-model="pathName"
      :counter="10"
      :rules="rules"
      label="Patrname"
      required
      class="input"
    />
  </div>
</template>

<script>
export default {
  name: 'PersonDataColumn',
  data: () => ({
    name:'',
    surName:'',
    pathName:'',
    rules:[
      v => v.length > 0 || 'Empty'
    ]
  }),
  created(){
    this.$watch('name', (value) => {
       this.$emit('setField', {value,name:'name'});
    })
    this.$watch('surName', (value) => {
       this.$emit('setField',{value,name:'surName'});
    })
    this.$watch('pathName', (value) => {
       this.$emit('setField', {value,name:'pathName'});
    })
  }
  
}
</script>
<style>
  .person-column__title{
    text-align:center;
  }
  
</style>