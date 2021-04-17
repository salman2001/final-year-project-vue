<template>
    <h1>
        HTML Tags
    </h1>
    <div>
        <div class="tags">&lt;!DOCTYPE&gt; should be used in the start of every html document. Its like a declaration which shows what type of document to expect.</div>
        <div class="tags" >&lt;p&gt; is used for paragraph <button @click="handleClick(`Paragraph Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;head&gt; tag is used for headings <button @click="handleClick(`Head Tag`)">Try it yourself</button></div>
        <div class="tags"> &lt;img&gt; is used to insert images into HTML <button @click="handleClick(`Image Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;List&gt; tags are used for ordered or un-ordered lists and for more information please <button @click="handleClick(`List Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;option&gt; tag is used for selection of anything from different options<button @click="handleClick(`Option Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;textarea&gt;: tag is used to make a  input field with text inside <button @click="handleClick(`Textarea Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;button&gt; tag is used for making a button with different functions <button @click="handleClick(`Button Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;a&gt; tag is used to add online links to webpages <button @click="handleClick(`Link Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;nav&gt; tag is used to add a Navigation bar on the top of the webpage <button @click="handleClick(`Nav Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;form&gt; tag is used to add a Navigation bar on the top of the webpage <button @click="handleClick(`Form Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;section&gt; tag is used to add a section with paragraphs <button @click="handleClick(`Section Tag`)">Try it yourself</button></div>
        <div class="tags">&lt;b&gt; tag is used to bold sentences. <button @click="handleClick(`Bold Tag`)">Try it yourself</button></div>
        </div>



</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup(){
        const router = useRouter();
        const handleClick = (tag) => {
            router.push({name : "HTMLeditor", params : {tags: tag}})
        }
        return {handleClick}
    }  
}
</script>

<style scoped>
.tags{
  display: inline-block;
  width: 90%;
  height: 50px;
  color: black;
  padding: 20px;
  border: 3px solid black;
  box-shadow: 0 0 0 10px lightgrey inset;
}
button:hover {   
  opacity: 0.7;   
}   
button {   
  background-color:lightgrey;   
  color: black;   
  padding: 4px;   
  border: 1px solid black;   
  cursor: pointer;   
}   



</style>