let username = "";
let password = "";

let onModify = () =>{

    document.getElementById("loginResult").innerHTML = "";
};

let submit = () =>{
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log("User"+username+" "+password);
    if(username.length == 0 || password.length == 0)
        document.getElementById("loginResult").innerHTML = "Please check your credentials";
    else{
    console.log("Inside the submit function");
    window.location.assign("file:///C:/Users/nsrag/OneDrive/Desktop/Projects/TyPeScript/AccuracyGame/index.html");   
    }

};