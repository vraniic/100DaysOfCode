var input = document.getElementById('tekst')
var char = document.getElementById('remainingChars')

const counter = (event) => {
    let text = event.target.value;
    let duzina = text.length

    let remaingingChars = 60 - duzina

    char.textContent = remaingingChars
}

var brojac = input.addEventListener('input', counter)


 
