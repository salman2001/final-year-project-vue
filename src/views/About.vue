<template>
<el-collapse class="block" v-model="activeName" accordion>
  <el-collapse-item title="How to Sign up for free for this HTML teaching Tool?" name="1">
    <div>To sign up you need to head to the registeration page where you will provide all your details to sign up</div>
  </el-collapse-item>
  <el-collapse-item title="How to Use the HTML elements Page?" name="2">
    <div>You need to sign up or Login to use the HTML page. In HTML elements page read about different element tags and try the code on a live HTML editor using the Try it button</div>
  </el-collapse-item>
  <el-collapse-item title="How to Login if you are already registered?" name="3">
    <div>To Login head to the login page located at the top right corner or there is a link on the Homepage as well.</div>
  </el-collapse-item>
  <el-collapse-item title="How to Use the Live HTML editor?" name="4">
    <div>On HTML editor page you write your code in the input section and see the results in output.</div>
  </el-collapse-item>
  <el-collapse-item title="How to reset your password?" name="5">
    <div>To reset the password you need to click on forgot password link in footer.</div>
  </el-collapse-item>
  <el-collapse-item title="How to see your details?" name="6">
    <div>To see your details after you have logged in, please go over the email section and you will see a dropdown that shows My Account page and if you click it you can see your details.</div>
  </el-collapse-item>
  <el-collapse-item title="How to Logout?" name="7">
    <div>If you hover over to the email part in the top right corner, you will see a logout option.</div>
  </el-collapse-item>
</el-collapse>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '0'
      };
    }
  }
</script>
<style scoped>
    div{
        color:black;
        font-size: 20px;
    }
    .block{
      font-family:  'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>
