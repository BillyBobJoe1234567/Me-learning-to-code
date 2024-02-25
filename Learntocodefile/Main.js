function namechange() {
    var button = document.getElementById('myButton');
    var title1 = button.innerHTML;
    var box = document.getElementById('showtime'); 
    var boxColor = box.innerHTML;
    
    if (title1 === "Show") {
        box.style.backgroundColor = 'blue'; 
        button.innerHTML = "Hide";
    } else {
        box.style.backgroundColor = '#000'
        button.innerHTML = "Show";
    }
}
