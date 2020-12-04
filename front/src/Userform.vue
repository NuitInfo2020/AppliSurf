<template>
  <div class="header">
    <FormBanner msg="Formulaire d'Inscription"/>
    <div class="form">
        <Formulaire></Formulaire>
    </div>
  </div>
</template>

<script>
import FormBanner from './components/UserForm/FormBanner.vue'
import Formulaire from './components/UserForm/Formulaire.vue'
export default {
  name: 'formulaire',
  components: {
    FormBanner,
    Formulaire
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>