const firebaseConfig = {
  apiKey: "AIzaSyC5E3JPB02cuMBZCi-VREuywKO6P2nJPss",
  authDomain: "attendance-cd96b.firebaseapp.com",
  databaseURL: "https://attendance-cd96b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attendance-cd96b",
  storageBucket: "attendance-cd96b.firebasestorage.app",
  messagingSenderId: "220431783469",
  appId: "1:220431783469:web:809af072f57750833f0aa4",
  measurementId: "G-5FZTFEFPR3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

console.log('connected to firebase')