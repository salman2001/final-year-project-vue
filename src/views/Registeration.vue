<template>
<el-row >
  <el-col :span="23" class="mainContent">
    <el-form ref="form" label-width="auto" 
      @keyup.enter="register()"
    >
      <h2>Register</h2>
      <!-- Email field -->
      <el-form-item label=" Email: ">
        <el-input 
        type="text" placeholder="Enter your email" required autocomplete="off" v-model="email"
        ></el-input>
      </el-form-item>

      <!-- Username field -->
      <el-form-item label=" Username: ">
        <el-input 
        type="text" placeholder="Create a username" required autocomplete="off" v-model="username"
        ></el-input>
      </el-form-item>

      <!-- Password field -->
      <el-form-item label=" Password: ">
        <el-input 
        type="password" placeholder="Create a strong password" required autocomplete="off" v-model="password"
        ></el-input>
      </el-form-item>

      <!-- PW confirmation field -->
      <el-form-item label=" Password Confirmation: ">
        <el-input 
        type="password" placeholder="...re-type password again" required autocomplete="off" v-model="passwordConfirmation"
        ></el-input>
      </el-form-item>

      <!-- full name -->
      <el-form-item label=" Name(s): ">
        <el-input 
        type="text" placeholder="...full name(s)" required autocomplete="off" v-model="fullName"
        ></el-input>
      </el-form-item>

      <!-- Institution name -->
      <el-form-item label=" Institution(s): ">
        <el-input 
        type="text" placeholder="...research/education organisations etc" required autocomplete="off" v-model="institution"
        ></el-input>
      </el-form-item>

      <!-- Phone Number -->
      <el-form-item label="Phone Number: ">
        <el-input
        type="text" placeholder="...with no spaces" autocomplete="off" v-model="phoneNumber">
        </el-input>
      </el-form-item>

      <div v-if="errorRegistration">
        <el-button plain type="danger" disabled class="el-icon-error">
          {{ errorRegistration }}
        </el-button>
      </div>

      <el-form-item>
        <el-row>
      <el-col :span="14">
        <el-button type="info" @click="register">Register</el-button>
      </el-col></el-row>
      </el-form-item>
    </el-form>
  </el-col></el-row>
</template>

<script>
import {ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication, firebaseFireStore } from "@/firebase/database";

export default {
  name: "register",
  emits: ["registerClicked"],


  setup(){
      const email = ref("");
      const username = ref("");
      const password = ref("");
      const passwordConfirmation = ref("");
      const fullName = ref("");
      const institution = ref("");
      const phoneNumber = ref("");
      const errorRegistration = ref("");

      watch(passwordConfirmation, () => {
        if (
          password.value !== "" &&
          passwordConfirmation.value !== "" &&
          password.value !== passwordConfirmation.value
        ) {
          errorRegistration.value = "Passwords do not match!, please try again.";
        } else {
          errorRegistration.value = null;
        }
      });
      const router = useRouter();
      const register = async () => {
        const info = {
          email: email.value.toLowerCase(),
          password: password.value,
          fullName: fullName.value,
          institution: institution.value,
          phoneNumber: phoneNumber.value,
        };
        if (!errorRegistration.value){
          const res = await firebaseAuthentication
          .createUserWithEmailAndPassword(info.email, info.password)
              router.replace("/");
          console.log(res)
          firebaseFireStore.collection('users').doc(`${res.user.uid}`).set(info)
        }
      }
      return {
        email,
        username,
        password,
        passwordConfirmation,
        fullName,
        institution,
        phoneNumber,
        errorRegistration,
        register
      }; 
     } 
  }
</script>
<style scoped>

button {   
  
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer; 
  width: 80%;
  
         }   
 input[type=text], input[type=password] {   
        width: 20%;   
        margin: 8px 0;  
        padding: 12px 20px;   
        display: inline-block;   
        border: 2px solid #C1272D;   
        box-sizing: border-box;   
    }  
 button:hover {   
        opacity: 0.7;   
    }   
  .cancelbtn {   
        width: auto;   
        padding: 10px 18px;  
        margin: 10px 5px;  
    }   
        
     
 .container {   
        padding: 25px;   
        background-color: black;  
    }

</style>