const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const toTop = document.querySelector('.to-top')
const clickLink = document.querySelectorAll('.menu-drop')

burger.addEventListener('click', () => {
 menu.classList.toggle('active')
})

window.addEventListener('scroll', () => {


 nav.classList.toggle('active', window.scrollY > 0)

 if(window.pageYOffset > 300) {
  toTop.classList.add('active')
 } else {
  toTop.classList.remove('active')
 }

})


let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
 let currentScrollPos = window.pageYOffset;
 if (prevScrollpos > currentScrollPos) {
  nav.classList.remove('hide') 
 } else {
  nav.classList.add('hide')
 }
 prevScrollpos = currentScrollPos;
})


toTop.addEventListener('click', () => {
 window.scrollTo(0, 0);
})


clickLink.forEach(link => {
 link.addEventListener('click', (e) => {
  let el = document.getElementById(e.target.getAttribute("link"))
  if(el.id == 'home') {
   window.scrollTo(0, 0);
   menu.classList.remove('active')
  } else {
   el.scrollIntoView({behavior: 'smooth', block:'start'})
   menu.classList.remove('active')
  }
  
 })
})

