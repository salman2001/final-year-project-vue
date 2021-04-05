<template>

<h3>HTML Editor</h3>

    <h3>HTML</h3>
      <textarea id="editor" v-model="text"></textarea>
    <h3>HTML Output</h3>
      <div class="outputPanel" v-html="text"></div>
  
</template>
<script>
  import {ref} from "vue";

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
#editor, .outputPanel{
      display: inline-block;
      margin:auto;
      width: 40%;
      height: 300px;
      border: 3px  solid black;
      padding: 10px;
      box-sizing: border-box;
    }
    
    </style>