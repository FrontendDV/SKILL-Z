
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

// Color changer button Events

let redBtn=document.querySelector('#redBtn')
let greenBtn=document.querySelector('#greenBtn')
let blueBtn=document.querySelector('#blueBtn')
// add events on click on buttons

redBtn.addEventListener('click',()=>{
    header.classList.toggle('redBtn')
})
greenBtn.addEventListener('click',()=>{
    header.classList.toggle('greenBtn')
})
blueBtn.addEventListener('click',()=>{
    header.classList.toggle('blueBtn')
})
// Button hover
let submitInfo=document.querySelector('#submitInfo')



// Local storage
let firstName=document.querySelector('#firstName')
let lastName=document.querySelector('#lastName')
let Email=document.querySelector('#Email')
let aboutUs=document.querySelector('#aboutUs')
let counter=1
let arr=[]
submitInfo.addEventListener('click',(e)=>{
    let objUser={
        id:counter++,
        name:firstName.value,
        lastName:lastName.value,
        email:Email.value,
        aboutus:aboutUs.value
    }
    arr.push(objUser)
    localStorage.setItem('users',JSON.stringify(objUser))
    location.reload()
})
// create inputs road from input.value to local.storage and info box.
let newDoc=JSON.parse(localStorage.getItem('users'))
let h3Name=document.querySelector('#h3Name')
let h3lastname=document.querySelector('#h3lastname')
let h3email=document.querySelector('#h3email')
let h3aboutUs=document.querySelector('#h3aboutUs')
let pName=document.createElement('p')
let plastName=document.createElement('p')
let pEmail=document.createElement('p')
let pAboutUs=document.createElement('p')
h3Name.appendChild(pName)
h3lastname.appendChild(plastName)
h3email.appendChild(pEmail)
h3aboutUs.appendChild(pAboutUs)
pName.innerText=newDoc.name
plastName.innerText=newDoc.lastName
pEmail.innerText=newDoc.email
pAboutUs.innerText=newDoc.aboutus
// clears info box local.storage 
let clearAll=document.querySelector('#clearAll')
clearAll.addEventListener('click', (e)=>{
    localStorage.clear()
    location.reload()
})

