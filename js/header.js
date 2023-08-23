$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) { 
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    $('#myMenuFunction').click(function() {
        $('#navMenu').toggleClass('responsive');
    });
});

// window.onload = function() {
//     let t = document.getElementById("myMenuFunction")
//     t.onclick = function () {
//     var i = document.getElementById("navMenu");
//     if(i.className === "nav-menu") {
//         i.className += " responsive";
//     } else {
//         i.className = "nav-menu";
//     }
//    }
// }