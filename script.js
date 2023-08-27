let menuBtn = document.getElementById('menu-btn')
let sideNav = document.getElementById('side-nav')
let menu = document.getElementById('menu')

sideNav.style.right = '-250px';


menuBtn.onclick = function(){
    if(sideNav.style.right == '-250px'){
        sideNav.style.right = '0px';
        menu.src = 'Barber_Shop_img/close.png';
    }else{
        sideNav.style.right = '-250px';
        menu.src = 'Barber_Shop_img/menu.png';
    }
}
// All animations will take exactly 500ms
// var scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 500,
// 	speedAsDuration: true
// });


let sections = document.querySelectorAll('section');
let nav = document.querySelectorAll('nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            nav.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}