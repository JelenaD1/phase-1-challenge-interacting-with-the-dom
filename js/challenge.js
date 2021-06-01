

document.addEventListener("DOMContentLoaded", function(){

let n = document.querySelector("#counter")


let c = parseInt(n.innerText)

setInterval(function() {
    n.innerText = c ++}, 1000)




    let incr = document.querySelector("#plus")
    let decr = document.querySelector("#minus")

incr.addEventListener("click", function(){
   c = c+1
    n.innerText = c 


})

decr.addEventListener("click", function() {
    c = c-1
n.innerText = c 

})

const array = []
const heart = document.querySelector("#heart")

heart.addEventListener("click", function(){
    let n = document.querySelector("#counter")
    let c = parseInt(n.innerText)
     let mainClass = document.querySelector(".likes")



if(array.includes(c)){
 array.push(c)
 const times = array.filter( (a) => a === c)
 const likeElement = document.getElementById(`${c}`)
 likeElement.innerHTML = `${c} has been liked ${times.length} times`

} else {
    const likeElement = document.createElement("li")
    likeElement.id = `${c}`
    likeElement.innerHTML = `${c} has been liked 1 time`
    array.push(c)
    mainClass.append(likeElement)
}


})


})
