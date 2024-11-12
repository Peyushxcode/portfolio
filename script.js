// /*==============toggle icon navbar==================*/ //
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
var crsr = document.querySelector("#cursor");
var crsrb = document.querySelector("#cursor-b");
var initialPath = `M 100 50 Q 700 50 1190 50`

var finalPath=`M 100 50 Q 700 50 1190 50`

var string = document.querySelector("#string")

string.addEventListener('mousemove', function (dets) {
    path = `M 100 50 Q ${(dets.x)*0.3} ${dets.y*0.3} 1190 50`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out" 
    })
})

string.addEventListener('mouseleave',function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5 ,
        ease:"elastic.out(1,0.2)"
    })
})
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrb.style.left = dets.x - 200 + "px";
    crsrb.style.top = dets.y - 200 + "px";
});



/*==============toggle icon navbar==================*/
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*============global scroll active link=========*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when clicking navbar link (scroll)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// /*==============scroll reveal==================*/ //
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'right' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//================= typed js ======================================
const typed = new Typed('.Multiple-text', {
    strings: ['Web-D', 'Problem Solving', 'Reading Books','Swimming'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
