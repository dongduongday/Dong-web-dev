let count = 0
let countEl = document.getElementById("count-el")
let errorEl = document.getElementById("error")

function increment() {
    count += 1
    countEl.innerText = count
}

let entriesEl = document.getElementById("entries-el")

function save() {
    entriesEl.textContent += count + " - "
    countEl.innerText = 0
    count = 0
}