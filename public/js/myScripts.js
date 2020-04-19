$(document).ready(function() {
   if (window.location.pathname === "/older") {
    $('#older').addClass('hidden')
   } 
})



const deletePost = function (element) {
    console.log(element)
    window.location = element.href
}

// const deleteButton = document.getElementById('deletePost')

// document.getElementById("deletePost").addEventListener('click', function(event){
  
//     if (confirm("Are you sure about deletion of the post?")) {
//         console.log(this.href)
//         window.location.href = "/"
//     }
// })

