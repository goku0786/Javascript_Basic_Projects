var add = document.querySelector('.add')
var heading = document.querySelector('h5')

var flag =0


add.addEventListener("click", function(){
   
if(flag==0){
    heading.innerHTML="Friends"
    heading.style.color="green"
    add.innerHTML="Remove"
    add.style.color='black'
    add.style.backgroundColor='lightgrey'
    flag=1
}
else{
    heading.innerHTML="Stranger"
    heading.style.color="red"
    add.innerHTML="Add"
    add.style.color='white'
    add.style.backgroundColor='aqua'
    flag=0
}

})
