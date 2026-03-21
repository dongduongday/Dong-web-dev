let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    count = ++count
    countEl.innerText = count
}
function save() {
    console.log(count)
}