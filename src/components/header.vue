<template>
   <div id="nav" class="container">
      <router-link class="el-icon-s-home" style="float:left" v-bind:to="{ name: 'Home' }">Home</router-link> 
      <router-link style="float:left" v-bind:to="{ name: 'Editor' } ">&lt;/&gt;Live Editor</router-link>
      
      <router-link class="el-icon-guide" style="float:left" v-bind:to="{ name: 'About' }">About</router-link>
      <router-link style="float:right" round v-if="!user" :to="{ name: 'Login'}">Login</router-link>
      <router-link style="float:right" round v-if="!user" :to="{ name: 'Registration'}">Register</router-link>
      <div v-if="user"><router-link :to="{ name: 'tags' }">HTML Elements</router-link> </div>
      <div style="float:right" v-if="user" >
         <div class="dropdown">
           <i class="el-icon-user"> </i>
            <button class="dropbtn" icon="el-icon-user" >
            <i icon="el-icon-user"> </i>
            <i class="fa fa-user"></i>
            Logged in ({{ user }}) 
            <i class="el-icon-more-outline"></i>
            </button>
            <div class="dropdown-content">
               <router-link  :to="{ name: 'MyAccount'}">My Account</router-link>
               <a @click="$emit('logout'); redirectToLogin">Logout</a>
            </div>
         </div>
      </div>

   </div>
</template>

<script>
import {useRouter} from 'vue-router';

export default {
  data(){
  return {
      isActive: false,
    };
  },
  props: ['user'],
  emits: [
    'logout'
  ],
  methods: {
  },
  setup(){
    let router = useRouter();
    function redirectToLogin(){
      router.push('login');
    }
    return{
      redirectToLogin
    }
  }
  
}

</script>

<style scoped>
#nav {
  overflow: hidden;
  background-color: rgb(158, 158, 158);
}

#nav a {
  float: left;
  font-size: 16px;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 22px 24px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #333333;
}


.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: rgb(58, 57, 57);
  padding: 22px 24px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

#nav a:hover, .dropdown:hover .dropbtn {
  background-color: rgba(26, 24, 24, 0.137);
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(41, 40, 40, 0.507);
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
 
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
 
  cursor: pointer;  
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>