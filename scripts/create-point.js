
function populateStates(){
    const stateSelect = document.querySelector("select[name=state]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {

        for (const state of states){
            stateSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
        
    })
}

populateStates()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateNameInput = document.querySelector("input[name=stateName]")

    const stateValue = event.target.value

    const indexOfSelectState = event.target.selectedIndex

    stateNameInput.value = event.target.options[indexOfSelectState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateValue}/municipios`

    fetch(url)
    .then(res => res.json())
    .then(cities => {

        for (const city of cities){
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false;       
    })
}

document
.querySelector("select[name=state]")
.addEventListener("change", getCities);



