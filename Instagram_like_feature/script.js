var container = document.querySelector('.container')
var icon = document.querySelector('i')

container.addEventListener("dblclick", function(){
   setTimeout(function(){
    icon.style.transform='translate(-50%,-50%) scale(2)'
   },250)
   setTimeout(function(){
    icon.style.transform='translate(-50%,-50%) scale(0)'
   },2000)
   
})