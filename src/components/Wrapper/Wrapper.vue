<template>
   <v-form
    ref="mainForm"
    lazy-validation
    @submit.prevent
    @submit="submit"
    class="wrapper">
    <v-row no-gutters>
      <v-col class="column-inputs">
        <person-data-column @setField='setField'/>
      </v-col>
      <v-col class="column-inputs">
        <phone-column @setField='setField'/>
        <v-btn 
        color="green"
        
        class="mr-4 wrapper__button"
        type="submit"
        >Сохранить</v-btn>
      </v-col>
      <v-col class="column-inputs">
        <password-column @setField='setField'/>
      </v-col>
    </v-row>
   </v-form>
</template>

<script>
import PersonDataColumn from './PersonDataColumn/PersonDataColumn.vue'
import PhoneColumn from './PhoneColumn/PhoneColumn.vue'
import PasswordColumn from './PasswordColumn/PasswordColumn.vue'
export default {
  name: 'Wrapper',
  components: {
    PersonDataColumn,
    PhoneColumn,
    PasswordColumn,
  },

  data: () => ({
    name:'',
    surName:'',
    pathName:'',
    phone:'',
    email:'',
    password:'',
    rules:[],
  }),
  methods: {
      validate () {
        this.$refs.form.validate()
        return true
      },
      async submit(e){
        const promise = await new Promise((resolve,reject) => {
          e.then((res) => {
            if(res.valid === true){
              resolve(true)
            }else{
              resolve(false)
            }
          }).catch(resolve(false))
        })
        const res = await promise
        let obj = {}
        obj['name']=this.name
        obj['surName']=this.surName
        obj['pathName']=this.pathName
        obj['phone']=this.phone
        obj['email']=this.email
        obj['password']=this.password
        if(res) alert(JSON.stringify(obj))
        
      },
      setField(obj){
        this[obj.name] = obj.value
      }
    },
  
}
</script>

<style>
  .wrapper{
    padding: 0;
    margin: 0;
  }
  .input{
    margin-bottom: 30px;
    margin-top: 20px;
  }
  .column-inputs{
    padding: 0 60px;
  }
  .wrapper__button{
    color:white;
    cursor: pointer;
  }
</style>