<template>

    <div class="flex-container">
        
        <div class="flex-child">
          <h3>HTML</h3>
        <textarea id="editor" v-model="text"></textarea>
      </div>
      <div class="flex-child">
        <h3>HTML Output</h3>
        <div class="outputPanel" v-html="text"></div>
      </div>
     </div>
      
</template>
<script>
import {ref} from "vue";
    export default {
        setup() {
          const text = ref("");
          return {text} 
      },
  }
</script>


<style scoped>
    .flex-container {
        display: flex;
        
    }
    .flex-child {
        flex: 1;
    }  
    .flex-child:first-child {
        margin-right: 20px;
    } 
    #editor{
          width: 70%;
          height: 300px;
          border: 6px  solid grey;
          padding: 0;
          
        }
        .outputPanel{
          width: 70%;
          height: 300px;
          border: 6px  solid grey;
          padding: 0px;
          
        }
        
        </style>