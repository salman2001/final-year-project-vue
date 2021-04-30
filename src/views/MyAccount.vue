<template>
  <body v-if="userDetails">
    <div class="container">
      <div>
        <el-card class="box-card">
          <div>
            <div>
              Welcome Back
              <span style="color: black; font-weight: bold"> {{ userDetails.email }} </span>
              <br />
              <el-button
                type="info"
                icon="el-icon-user"
                @click="$emit('logout')"
                >Logout</el-button
              >
            </div>
          </div>
        </el-card>
      </div>
      <div class="block">
        <div class="container">Your Details</div>
        <div class="block-1">Full Name : {{userDetails.fullName}}</div>
        <div class="block-1">Email: {{userDetails.email}}</div>
        <div class="block-1">Institution: {{userDetails.institution}}</div>
        <div class="block-1">Contact Number:{{userDetails.phoneNumber}}</div>
      </div>
    </div>
  </body>
</template>

<script>
import {
	firebaseAuthentication,
	firebaseFireStore
} from "@/firebase/database";
import {
	ref,
	watchEffect
} from 'vue';

export default {
	props: {
		user: {
			type: Object,
			default: () => {},
		},
	},
	setup() {
		const userDetails = ref(null);
		const snapShotObject = firebaseFireStore.collection("users").doc(`${firebaseAuthentication.currentUser.uid}`)
		const unsub = snapShotObject.onSnapshot(
			doc => {
				// need to make sure the doc exists & has data
				if (doc.data()) {
				userDetails.value = {
						fullName: doc.data().fullName,
						email: doc.data().email,
						institution: doc.data().institution,
						address: doc.data().address,
						phoneNumber: doc.data().phoneNumber
					};
				}
			},
		);
		watchEffect(onInvalidate => {
			onInvalidate(() => unsub());
		});
		console.log(userDetails.value)
		const email = ref("");
		const username = ref("");
		const fullName = ref("");
		const institution = ref("");
		const address = ref("");
		const phoneNumber = ref("");
		return {
			email,
			username,
			fullName,
			institution,
			address,
			phoneNumber,
			userDetails
		}
	}
}
</script>

<style scoped>
.profile {
  text-align: center;
}
.about {
  text-align: middle;
  font-size: 20px;
}
.header {
  text-align: left;
}

button:hover {
  opacity: 0.9;
}
button {   
  background-color: grey;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer; 
  width: 80%;
  
         }   
.block{
  display: inline-block;
  width: 70%;
  height: 200px;
  color: black;
  padding: 20px;
  border: 4px  solid rgb(124, 124, 124) ;
    border-radius: 6px;
    
    box-shadow: 0 0 0 5px rgba(128, 128, 128, 0.75)inset;
}
.block-1{
  text-align: left;
}
</style>
