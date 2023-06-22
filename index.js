let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let t = true

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    
    if(t){
         saveEl.textContent += count
         t = false
    }
    else{
        saveEl.textContent += " - " + count
    }
   
    countEl.textContent = 0
    count = 0
}

