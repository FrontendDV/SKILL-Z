
$(function(){
    $('#menuBtn').click(function(){
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



// github button hover function
let getBtn=document.querySelector('#getBtn')
let gitBtn=document.querySelector('#gitBtn')
gitBtn.addEventListener('mouseover',()=>{
    getBtn.setAttribute('class','getBtn transparentBtn')
    gitBtn.setAttribute('class','gitBtn blueBtn')
})
gitBtn.addEventListener('mouseout',()=>{
    getBtn.setAttribute('class','getBtn')
    gitBtn.setAttribute('class','gitBtn')
})

// Expreience buttons 
// let wayupBtn=document.querySelector('#wayupBtn')
// let scsaBtn=document.querySelector('#scsaBtn')
// let wayup=document.querySelector('#wayupId')

// wayupBtn.addEventListener('click',function(){
//     if(wayup){
//         wayup.hasAttribute('class','wayup')
//         wayup.removeAttribute('class','wayup')
//         wayup.setAttribute('class','inline')
//     }
// })

