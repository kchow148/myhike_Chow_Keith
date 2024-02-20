//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyC789jyXKufyuBTL4kvcR7cF5ODMDwKJSc",
    authDomain: "comp1800-202410-demo-424e1.firebaseapp.com",
    projectId: "comp1800-202410-demo-424e1",
    storageBucket: "comp1800-202410-demo-424e1.appspot.com",
    messagingSenderId: "314032407991",
    appId: "1:314032407991:web:b9b4d31f12538455b71432"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
