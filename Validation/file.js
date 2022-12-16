function acceptInput () {
    let x = document.forms["loginForm"]["userName"].value;
    let y = document.forms["loginForm"]["password"].value;
    let text;
    if(x == "admin" && y == "123"){
        text = "Welcome";
    }
    else{
        text= "not registered";
    }
    document.getElementById("demo").innerHTML = text;

}

document.getElementById("register").onsubmit = function(){
    let name = document.getElementById("name").value;
    let nameInput = /[A-Za-z]/g;
    let nameValidation = nameInput.test(name);

    if(nameValidation == false){
        alert("Valid name format .... Please enter a valid name")
        return false;
    }
    else{
        alert(nameValidation)
    }
    return true;
    
}

