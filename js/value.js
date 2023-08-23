let sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
});

window.onload = function() {
    const accordionItems = document.querySelectorAll('.value_accordion-item')

    accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value_accordion-header')
    accordionHeader.addEventListener('click', () =>{ const openItem = document.querySelector('.accordion-open')
    toggleItem(item)
    if (openItem && openItem!== item) { 
        toggleItem(openItem)
    }

    })

})
const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value_accordion-content')

    if(item.classList.contains('accordion-open')){ 
        accordionContent.removeAttribute('style') 
        item.classList.remove('accordion-open')

}else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px' 
    item.classList.add('accordion-open')
}
}

}

