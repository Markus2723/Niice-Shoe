let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

let slide = document.querySelector('.slide-container');
let index = 0;

function next(){
   slides[index].classList.remove('active');
   index = (index + 1) % slides.length;
   slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length ) % slides.length;
    slides[index].classList.add('active')
 }

 document.querySelectorAll('.featured-image-1').array.forEach(image_1 => {
   image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image-1').src = src
   })
   
 })


