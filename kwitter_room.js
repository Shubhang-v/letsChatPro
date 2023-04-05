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


    function load()
    {
    user_name = localStorage.getItem("User Name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    }

  function AddRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
  
    localStorage.setItem("Room Name",room_name);
    window.location = "kwitter_page.html";
  }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name : "+Room_names);
    row = "<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });
    });}
  getData();
  
  function redirectToRoomName(name)
  {     
    console.log(name);
    localStorage.getItem("Room Name",name);
    window.location = "kwitter_page.html";
  }
  function logout()
  {
    
    localStorage.removeItem("Room Name");
    window.location = "index.html";
  }