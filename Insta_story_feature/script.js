var arr = [

    {
        dp: "https://images.pexels.com/photos/14647303/pexels-photo-14647303.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/18071745/pexels-photo-18071745/free-photo-of-black-and-white-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    {
        dp: "https://images.pexels.com/photos/17980328/pexels-photo-17980328/free-photo-of-young-woman-in-a-blue-dress-posing-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/18021294/pexels-photo-18021294/free-photo-of-fashion-love-people-woman.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    {
        dp: "https://images.pexels.com/photos/2905825/pexels-photo-2905825.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=400"
    },

    {
        dp: "https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/16122834/pexels-photo-16122834/free-photo-of-girl-with-flowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=400"
    }


]

var clutter = ""

arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`

    // clutter += "hello"
})

document.querySelector(".stories").innerHTML = clutter


document.querySelector(".stories").addEventListener("click", function (data) {
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[data.target.id].story})`

    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none"
    },3000)

})