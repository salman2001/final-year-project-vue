<template>
<!--html Editor with pre-existing code-->
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
//Getting props from parent
  export default {
    props: ['tagData'],
      setup(props) {
          const text = ref("");
          console.log(props.tagData.codeString)
          text.value = props.tagData.codeString;
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
      border: 4px  solid rgb(124, 124, 124) ;
      border-radius: 6px;
      padding: 10px;
      box-shadow: 0 0 0 5px rgba(128, 128, 128, 0.75)inset;
      
    }
    .outputPanel{
      width: 70%; 
      height: 300px;
      border: 4px  solid rgb(124, 124, 124) ;
      border-radius: 6px;
      padding: 8px;
      box-shadow: 0 0 0 5px rgba(128, 128, 128, 0.75)inset;
      
    }
    
    </style>