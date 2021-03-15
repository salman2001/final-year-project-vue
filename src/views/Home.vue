<template>
    <div>
   
       this is homepage
   
      
      
   </div>
</template>

<script>

import {useRouter} from 'vue-router';
export default {
   name: 'Home',
      components: {
      
   },
   props: {
      user: {
         type: Object,
         default: () => {},
      },
   },
   setup(){
      const router = useRouter();

      function gotoLogin(){
         router.push('login');
      }
      function gotoRegister(){
         router.push('registration');
      }

      return{
         gotoRegister,
         gotoLogin
      }
   }

}

</script>

