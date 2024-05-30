

document.addEventListener('DOMContentLoaded', () => {

fetch('http://localhost:3003/monsters')
.then((response) => response.json())
.then((json) => {
    console.log(json)
    let monsters = json.slice(0,50)
    console.log(monsters)
    showMonsters(monsters)
})

function showMonsters(monsters) {
    const container = document.getElementById('monster-container')

   for (let monster of monsters) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let h5 = document.createElement('h5')
    let p = document.createElement('p')
    h1.innerHTML = monster.name
    h5.innerHTML = monster.age
    p.innerHTML = monster.description
    div.appendChild(h1)
    div.appendChild(h5)
    div.appendChild(p)
    container.appendChild(div)
   }
}

let creatediv = document.getElementById('create-monster')
let form = document.createElement('form')
form.id = 'monster-form'
creatediv.appendChild(form)

document.getElementById('monster-form').addEventListener('submit', (e) => { 
    e.preventDefault()
    console.log(e.target.name.value)
    let name = e.target.name.value
    let age = e.target.age.value
    let description = e.target.description.value
    //console.log(object)
    fetch('http://localhost:3003/monsters', {
        method: 'POST', 
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ name: name, age: age, description: description })
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
})

 let button = document.getElementById('forward')
 button.addEventListener('click', (e)=> {
    console.log(e)

    fetch('http://localhost:3003/monsters')
    .then((response) => response.json())
    .then((json) => {
    console.log(json)
    let monsters = json.slice(50,100)
    console.log(monsters)
    showMonsters(monsters)
})
})

})