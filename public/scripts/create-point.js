
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
    
    const indexOfSelectState = event.target.selectedIndex

    stateNameInput.value = event.target.options[indexOfSelectState].text

    const stateValue = event.target.value    

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateValue}/municipios`

    citySelect.innerHTML= "<option value>Selecione a cidade</option>";
    citySelect.disabled = true;

    fetch(url)
    .then(res => res.json())
    .then(cities => {
        
        for (const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false;       
    })
}

document
.querySelector("select[name=state]")
.addEventListener("change", getCities);

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){

    item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){

    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id;

    const alreadySelected = selectedItems.findIndex(item => {

        const itemFound = item === itemId

        return itemFound
    })

    if (alreadySelected >= 0){

        const filteredItems = selectedItems.filter(item => {

            const itemIsDifferent = item != itemId

            return itemIsDifferent
        })

        selectedItems = filteredItems
    }else{

        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems
}


