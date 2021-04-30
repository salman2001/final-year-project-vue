<template>

  <div class="layout">
    <appHeader :user="user" @logout="logout"/>
    <router-view :user="user" @logout="logout" class="globalfont center"/>
    
  </div>
  <appFooter/>
</template>
<script>
  // @ is an alias to /src
  import header from "@/components/header.vue";
  import footer from "@/components/footer.vue";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import {
    firebaseAuthentication,
    // firebaseFireStore,
    // timestamp,
  } from "@/firebase/database";
  
  export default {
    components: {
      appHeader: header,
      appFooter: footer, 
    },
    setup() {
      const user = ref("");
      const errorLogout = ref(null);
  
      firebaseAuthentication.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          user.value = currentUser.email;
          console.log(user.value);
        } else {
          user.value == null;
        }
      });
      const router = useRouter();
  
      function logout() {
        firebaseAuthentication.signOut().then(
          () => {
            router.push("login");
            user.value = null;
          },
          (error) => {
            errorLogout.value = error.message;
          }
        );
      }
      return {
        user,
        logout,
      };
    },
  };
  </script>
