<template>
    <!-- Language HTML ici -->
    <form method="post">
        <label for="pseudo">Pseudo :</label>
        <input type="text" placeholder="Entrez un pseudo"><br>
        <label for="mdp">Mot de passe :</label>
        <input type="text" placeholder="Entrez un mot de passe"><br>
        <label for="courriel">Courriel :</label>
        <input type="text" placeholder="Entrez un courriel"><br>
        <input type="submit" value="Valider"><br>
    </form>
</template> 

<script>
export default {
  name: 'formulaire'
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