var firebaseConfig = {
    apiKey: "AIzaSyAIebZGzQKixPRpXwFOT03Fh0yTq8KMG_k",
    authDomain: "practice-da982.firebaseapp.com",
    databaseURL: "https://practice-da982-default-rtdb.firebaseio.com",
    projectId: "practice-da982",
    storageBucket: "practice-da982.appspot.com",
    messagingSenderId: "38542226784",
    appId: "1:38542226784:web:5e39db9eb64b57a4711a05"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser()
  {
      username=document.getElementById("username").value
      firebase.database().ref("/").child(username).update({
          purpose:"adding user"
      })
      document.getElementById("username").value=""
  }
//ADD YOUR FIREBASE LINKS