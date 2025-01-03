let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if (count <= 0) {
        return alert("Cannot have negative count")
    }
    count -= 1
    countEl.textContent = count
}

function save() {
    if (count == 0) {
         return alert("Update the count.")
    }
    passangerCount = count + " ~ "
    saveEl.textContent += passangerCount
    countEl.textContent = 0
    count = 0
}