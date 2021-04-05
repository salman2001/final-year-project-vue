<template>
    <h1>
        this is a tags page
    </h1>

    <h2>
        Below you will find all the tags and their description
    </h2>
        <div class="tags">&lt;!DOCTYPE&gt; should be used in the start of every html document.
             Its like a declaration which shows what type of document to expect.
        </div>
        <div class="tags" > The &lt;p&gt; is used for paragraph <button @click="handleClick(`p`)">Try it yourself</button></div>
        <div class="tags">&lt;head&gt; is used to head sentences <button @click="handleClick(`head`)">Try it yourself</button></div>
        <div class="tags"> &lt;img&gt; is used for headings</div>
        <div class="tags">Head: tag is used for headings</div>
        <div class="tags">Head: tag is used for headings</div>
        <div class="tags">Head: tag is used for headings</div>
        <div class="tags">Head: tag is used for headings</div>
        <div class="tags">Head: tag is used for headings</div>

</template>
<script>


import { useRouter } from 'vue-router';
export default {

    setup(){
        const router = useRouter();

        const handleClick = (tag) => {

            router.push({name : "HTMLeditor", params : {tags: tag}})
           // console.log(tag)
        }

        return {handleClick}
    }

    
  
}
</script>

<style scoped>
.tags{
    display: inline-block;
  width: 40%;
  height: 30%;
  padding: 60px;
  border: 2px solid black;
  background-color: white;
}




</style>