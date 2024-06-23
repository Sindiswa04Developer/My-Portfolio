let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a')
const scrollers = document.querySelectorAll(".scroller")
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');


window.onscroll = ()=> {
    sections.forEach(sec=> {
        let top= window.scrollY;

        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;

        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height )
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id+']').classList.add('active')
            })
        }
    })
}


if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
    addAnimation();
}

// function addAnimation() {
//     scrollers.forEach((scroller)=> {
//         scroller.setAttribute("data-animated",true)
        
//         const scrollerInner = scroller.querySelectorAll(".scroller_inner");
//         const scrollerContent = Array.from(scrollerInner.children);
    
        
//         scrollerContent.forEach(item => {
//             const duplicatedItem = item.cloneNode(true)
//             duplicatedItem.setAttribute("aria-hidden",true)
//             scrollerInner.appendChild(duplicatedItem);
//          })
     
//     })
// }


function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelectorAll(".scroller_inner");
        scrollerInner.forEach((inner) => {
            const scrollerContent = Array.from(inner.children);
             
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                inner.appendChild(duplicatedItem); // Append the duplicated item to the scrollerInner
            });
        });
    });
}

window.addEventListener('scroll',function(){
    var element = document.querySelector('.scroll-element')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})

window.addEventListener('scroll',function(){
    var element = document.querySelector('.item')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})


window.addEventListener('scroll',function(){
    var element = document.querySelector('.item-2')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})


window.addEventListener('scroll',function(){
    var element = document.querySelector('.show')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})

window.addEventListener('scroll',function(){
    var element = document.querySelector('.show-1')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})

window.addEventListener('scroll',function(){
    var element = document.querySelector('.show-2')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})

window.addEventListener('scroll',function(){
    var element = document.querySelector('.show-3')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})

window.addEventListener('scroll',function(){
    var element = document.querySelector('.show-4')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})

window.addEventListener('scroll',function(){
    var element = document.querySelector('.show-5')
    var position = element.getBoundingClientRect()


    if(position.top < window.innerHeight && position.bottom >=0){
        element.classList.add('visible')
    }
    
})


navToggle.addEventListener('click', ()=>{
  const visibility = primaryNav.getAttribute('data-visible');
  if(visibility === 'false')
    {
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('data-expanded',true);
    }
    else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible',false);
        navToggle.setAttribute('data-expanded',false);
    }

  console.log(visibility)
})