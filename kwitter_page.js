//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBxh95xjeH_I_QbKYSiUOsiVqckoiipm2k",
      authDomain: "kwitter-2f192.firebaseapp.com",
      databaseURL: "https://kwitter-2f192-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f192",
      storageBucket: "kwitter-2f192.appspot.com",
      messagingSenderId: "174335128741",
      appId: "1:174335128741:web:1481ed49514778b77ac94c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name"); 

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

    }
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();







































function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }