function alt() {
    var name1 = document.getElementById("Username").value;
    if (name1 === "Laurence") {
        alert("Welcome, " + name1 + "!");
    } else if (name1 === "Henry") {
        alert("Go away "+name1+" please talk to Laurence to access this site.");
    } else if (name1 === "Jefe"){
        alert("Welcome master, "+name1+". I am in your service.");
    } else if (name1 === "Mum"){
        alert("Hello "+name1+", would you like some wine?")
    } else {
        alert("Incorrect Username")
    }
}
