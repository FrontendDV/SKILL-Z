// Final Exam SCSA
// create header
let header=document.createElement('header')
document.body.appendChild(header)
header.setAttribute('class','header')
header.setAttribute('class','header container')
// create h1 Logo
let h1A=document.createElement('a')
header.appendChild(h1A)
h1A.setAttribute('class','h1')
h1A.setAttribute('href','index.html')
h1A.innerHTML="<h1>Skill<span class='span'>Z</span></h1>"
// create nav 
let a=document.createElement('a')
header.appendChild(a)
a.setAttribute('class','a')
a.setAttribute('href','scsa.html')
a.innerText='მთავარი'
let a2=document.createElement('a')
header.appendChild(a2)
a2.setAttribute('class','a')
a2.setAttribute('href','scsa.html')
a2.innerText='FAQ'
a2.setAttribute('href','faq.html')
// create facebook a tag for href 
let a3=document.createElement('a')
header.appendChild(a3)
a3.setAttribute('class','a')
a3.setAttribute('href','https://www.facebook.com/gio.wereteli.seu/')
a3.setAttribute('target','_blank')
a3.innerText=''
// create facebook img
let img=document.createElement('img')
a3.appendChild(img)
img.setAttribute('class','img')
img.setAttribute('src','./img/icons8-facebook.svg')

// Animate Menu
$(function(){
    $('#MenuIcon').click(function(){
        $('#hidden-menu').animate({width:'toggle'},500)
    })
    $('#closeBtn').click(function(){
        $('#hidden-menu').animate({width:'toggle'},500)
    })
    $('#js').click(function(){
        $('#hidden-menu').animate({width:'toggle'},500)
        $('#closeBtn').addClass('none')
    })
    $('#jQuery').click(function(){
        $('#hidden-menu').animate({width:'toggle'},500)
        $('#closeBtn').addClass('none')
    })
})

// FAQ question buttons
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// delete buttons 
let deleteBtn1=document.querySelector('#deleteBtn1')
deleteBtn1.addEventListener('click',(e)=>{
    e.currentTarget.parentElement.previousElementSibling.style.display='none'
    e.currentTarget.parentElement.style.display='none'
    
})
let deleteBtn2=document.querySelector('#deleteBtn2')
deleteBtn2.addEventListener('click',(e)=>{
  e.currentTarget.parentElement.previousElementSibling.style.display='none'
  e.currentTarget.parentElement.style.display='none'
})
let deleteBtn3=document.querySelector('#deleteBtn3')
deleteBtn3.addEventListener('click',(e)=>{
  e.currentTarget.parentElement.previousElementSibling.style.display='none'
  e.currentTarget.parentElement.style.display='none'
})

