// alert("welcome MR Hemanth sai")
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var button=document.getElementById("btn");
  if(username=="hemanth.nellori@gmail.com"&&password=="hemanth.123")
  {
     window.location.assign("foodapp.html");
    alert("you login successfully");
    // button.setAttribute(href,"foodapp.html");
    
  }
  else{
    alert("enter valid details");
  }
}
login();
    // You can add your login logic here
    // For demonstration purposes, let's just display the entered username and password in the console
    console.log("Username: " + username);
    console.log("Password: " + password);
  
    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });