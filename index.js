const inputColor = document.getElementById("colorBox")
const containerDiv = document.getElementById("container")
const form = document.getElementById("form")
const mode = document.getElementById("mode")

inputColor.addEventListener("change", function() {
    console.log(inputColor.value)
})


let data = {}
let valuesArray = []

form.addEventListener("submit", (e) => {
    containerDiv.innerHTML = ""
    valuesArray = []
             
    e.preventDefault()
    console.log("btn clicked")
    console.log(mode.value)
    console.log(inputColor.value)

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
            console.log(color.hex.value)
            
            valuesArray.push(color.hex.value)
            containerDiv.innerHTML += `<div style="background:${color.hex.val}"></div>`
         
       }

       for (let i = 0; i < valuesArray.length; i++) {
            containerDiv.innerHTML += `
            <div class="colorDiv" style="background: ${valuesArray[i]}"> 
            <div style="position:fixed; bottom: 20%; margin-left: 0.7rem; font-size: 1.2rem">${valuesArray[i]}</div>
            </div>`
            
        
       }
      
    })

} 

   
    console.log(valuesArray)
