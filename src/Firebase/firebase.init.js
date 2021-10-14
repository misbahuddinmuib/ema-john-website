// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication=()=>{


    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/*

steps for authentication
--------------------------

step-1: initialize Setup

1.firebase: create project
2.create web app
3.get configurataion
4.initialize firebase
5.Enable auth method
-------------------
step-2:
1.create login Components
2.create Regsiter componets
3.create Route for Login and Registration

--------------------
step-3:
1.setup sign in method 
2.setup sign out method
3.User state
4.special observer




*/