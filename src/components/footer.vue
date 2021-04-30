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
  position:inherit;
  bottom: 0;
  width: auto;
  height: 2.5rem;  
}

#footer a {
  font-weight: bold;
  color: black;
}

#footer a.router-link-exact-active {
  color: #42b983;
}
</style>