
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section nav a');
window.onscroll = () =>  {
   Sections.document(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        id(top >= offset && top < offset + height)
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animat');
        
        if (l) {   
         }
        else {
            sec.classList.remove('show-animat');
        }
    });


let header = document.querySelector('header');


header.classlist.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active')

let footer = document.querySelector('footer');

footer.classList.toggle('show-animate',this.innerHeighte + this.scroll >= document.scrollingElemente.
scrollHeight);
}
