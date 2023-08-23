window.onload = function() {
    let t = document.getElementById("myMenuFunction")
    t.onclick = function () {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
}