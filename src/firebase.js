import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAnaZIO3BWvJvOQydkJwihUFbXflJ_-Ihc",
  authDomain: "todoist-2856d.firebaseapp.com",
  databaseURL: "https://todoist-2856d-default-rtdb.firebaseio.com",
  projectId: "todoist-2856d",
  storageBucket: "todoist-2856d.appspot.com",
  messagingSenderId: "879987142053",
  appId: "1:879987142053:web:87d12745f6bc2d5b60cc4c",
  measurementId: "G-B3VBSJ2M76",
});

export { firebaseConfig as firebase };
