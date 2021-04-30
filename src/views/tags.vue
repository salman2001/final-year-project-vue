<template>
    <h1 class="container">
        HTML Tags
    </h1>
    <div class="container">
      <div class="block">
        
      <div class="tags">&lt;!DOCTYPE&gt; should be used in the start of every html document. Its like a declaration which shows what type of document to expect.</div>
        <div class="tags" >&lt;p&gt; is used for paragraph <el-button type="info" plain  @click="handleClick(`Paragraph Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;head&gt; tag is used for headings <el-button type="info" plain  @click="handleClick(`Head Tag`)">Try it yourself</el-button></div>
        <div class="tags"> &lt;img&gt; is used to insert images into HTML <el-button type="info" plain  @click="handleClick(`Image Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;List&gt; tags are used for ordered or un-ordered lists and for more information please <el-button type="info" plain  @click="handleClick(`List Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;option&gt; tag is used for selection of anything from different options<el-button type="info" plain  @click="handleClick(`Option Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;textarea&gt; tag is used to make a  input field with text inside <el-button type="info" plain  @click="handleClick(`Textarea Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;button&gt; tag is used for making a button with different functions <el-button type="info" plain  @click="handleClick(`Button Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;a&gt; tag is used to add online links to webpages <el-button type="info" plain  @click="handleClick(`Link Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;nav&gt; tag is used to add a Navigation bar on the top of the webpage <el-button type="info" plain  @click="handleClick(`Nav Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;form&gt; tag is used to add a Navigation bar on the top of the webpage <el-button type="info" plain  @click="handleClick(`Form Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;section&gt; tag is used to add a section with paragraphs <el-button type="info" plain  @click="handleClick(`Section Tag`)">Try it yourself</el-button></div>
        <div class="tags">&lt;b&gt; tag is used to bold sentences. <el-button type="info" plain  @click="handleClick(`Bold Tag`)">Try it yourself</el-button></div>
      </div>
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
  display: inline-flexbox;
  width: auto;
  height: auto;
  color: black;
  padding: 15px;
  border: 3px solid rgb(124, 124, 124) ;
  box-shadow: 0 0 0 10px rgba(128, 128, 128, 0.75) inset;
}
button:hover {   
  opacity: 0.7;   
}   
button {   
  background-color: #4CAF50;
  border: 3px solid green;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 25px 10px;
  cursor: pointer;
 
}   
.block{
float:left;
}



</style>