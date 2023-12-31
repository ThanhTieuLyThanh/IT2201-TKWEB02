window.onload = function() {
    let i = document.getElementById("main");
    let images = document.querySelectorAll(".properties-container .box-house img"); 
    for (let im of images) {
        im.onclick = function() {
            i.src = this.src;
        };
    }

    let chose = document.querySelectorAll(".properties .box-house");

    for (let b of chose) {
        b.onclick = function() {
            let c = this.getAttribute("rel");
            let images = document.querySelectorAll(".btn5 img");

            for (let j = 0; j < images.length; j++) {
                images[j].src = `images/house/${c}_${j + 1}.jpg`;
            }
        }
    }   

    let imagesInBtn5 = document.querySelectorAll(".btn5 img");
    let mainImage = document.getElementById("main");

    for (let img of imagesInBtn5) {
        img.onmousemove = function() {
            let src = this.src;
            mainImage.src = src;
        }
    }
}; 

document.getElementById('next').onclick= function(){
    const widthItem = document.querySelector('.box-house').offsetWidth + 20; 
    document.getElementById('formList').scrollLeft += widthItem; 
}
document.getElementById('prev').onclick= function(){
    const widthItem = document.querySelector('.box-house').offsetWidth + 20;
    document.getElementById('formList').scrollLeft -= widthItem;
}