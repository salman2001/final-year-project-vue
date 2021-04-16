<template>

<h1>{{tag}}</h1>
<div class="">
  <p1 class="container">{{tagData.content}}</p1>
  <editor :tagData="tagData"/>
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
.container{
  padding: 5px;
  width: 40%;
  display: inline-block;
  border: 6px solid grey;
}
</style>
