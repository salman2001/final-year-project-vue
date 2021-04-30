<template>

<h1>{{tag}}</h1>
<div class="">
  <p1 class="container-box">{{tagData.content}}</p1>
  <editor :tagData="tagData"/>
</div>
<div>
<router-link style="float:left" v-bind:to="{ name: 'tags' }">Back to Tags Page</router-link> 
</div>
</template>
<script>
import { useRoute } from 'vue-router';
import editor from "@/components/editor.vue";
import allTags from "@/assets/data/editorTags.js"
import {ref} from "vue";

export default {
  components: {
 editor: editor,
  },
  setup(){
    const route = useRoute();
    const tag = ref("");
    const tagData = ref("");

    console.log(allTags);


 
    tag.value = (route.params.tags);

    function filterTags(){
      let filteredTags = allTags.filter((currentTag) => currentTag.tagId == tag.value);
      tagData.value = filteredTags[0];
    }

    filterTags();
   
    return {tag, tagData}
  }
}
</script>

<style scoped> 
.container-box{
  padding: 20px;
  width: 90%;
  display: inline-block;

  border: 3px solid rgb(124, 124, 124);
  box-shadow: 0 0 0 5px rgba(128, 128, 128, 0.75) inset;
}
</style>
