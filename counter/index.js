//document.getElementById("count-el").innerText = "abc"
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

// console.log(count)

function inc(){
   console.log("the button was clicked")
   count = count + 1
   countEl.innerText = count
} 

function save(){
  let pcount = count + " - " 
  //saveEl.innerText += pcount
  //innerText won't return text of hidden elements like space
  saveEl.textContent+=  pcount
  //textContent returns every element in the node
  count = 0
  countEl.innerText = count
}

 