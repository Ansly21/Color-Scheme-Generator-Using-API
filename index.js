const inputColor = document.getElementById("colorBox")
const containerDiv = document.getElementById("container")
const form = document.getElementById("form")
const mode = document.getElementById("mode")

let data = {}
let valuesArray = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    containerDiv.innerHTML = ""
    valuesArray = []         
    let inputColorValue = inputColor.value.replace("#", "")
    let completeURL = {
        color: inputColorValue,
        mode: mode.value
    }
    renderHtml(completeURL)
})

function renderHtml(data) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${data.color}&mode=${data.mode}&count=5`)
    .then(res => res.json())
    .then(data => {
       for (color of data.colors) {
            valuesArray.push(color.hex.value)
            containerDiv.innerHTML += `<div style="background:${color.hex.val}"></div>`
       }

       for (let i = 0; i < valuesArray.length; i++) {
            containerDiv.innerHTML += `
            <div class="colorDiv" style="background: ${valuesArray[i]}">
                <div class="hexText">${valuesArray[i]}</div>
            </div>
            `
       }
    })
} 