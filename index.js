// document.getElementById("count-el").innerText = 5



//let count = 50
//count = count+100
//count= count-25
//count= count-70

//console.log(count)
let saveEl = document.getElementById("save-el")
let countEl= document.getElementById("count-el")

let count= 0

function increment() {
    count+=1
    countEl.innerText=count
}

function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent =0
    count=0
}