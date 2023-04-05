const firebaseConfig = {
    apiKey: "AIzaSyCil2NXnFwPJEmUyf2u2i45mLZcQfiq5BQ",
    authDomain: "letschatwebapp-9f300.firebaseapp.com",
    databaseURL: "https://letschatwebapp-9f300-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-9f300",
    storageBucket: "letschatwebapp-9f300.appspot.com",
    messagingSenderId: "653470164345",
    appId: "1:653470164345:web:919571cc7637ec03f4fba8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User Name");
  room_name = localStorage.getItem("Room Name");

function send()
{
    msg = document.getElementById("msg").value;
    document.getElementById("msg").value = ""; 

    firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like:0
    });
}

function logout()
  {
    
    localStorage.removeItem("Room Name");
    window.location = "index.html";
}