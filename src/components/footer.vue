<template>
  <div align="center" class="footer">
    <footer id="footer">
        <router-link :to="{ name: 'About'}"> About| </router-link> 
        <router-link :to="{ name: 'forgot-password'}">Forgot Password?</router-link> 
  </footer>
  </div>
</template>

<style scoped>
#footer {
  display: block;
   margin: 0;
  overflow: hidden;
    bottom: 50px;

}

#footer a {
  font-weight: bold;
  color: black;
}

#footer a.router-link-exact-active {
  color: #42b983;
}
</style>