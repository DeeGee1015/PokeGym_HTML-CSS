let section1 = document.getElementById('section1')
let devpokemon = ['023','095','006']

for (p in devpokemon) {
  let devindiv = document.createElement('div')
  // div.style.backgroundImage = `url('https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main.png')`
  devindiv.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${devpokemon[p]}.png')`
  devindiv.style.backgroundSize = 'contain'
  devindiv.style.backgroundRepeat = 'no-repeat'
  devindiv.style.border = ''
  devindiv.style.height = '200px'
  devindiv.style.margin = '20%'
  section1.appendChild(devindiv)

}

section1.style.display = 'grid'
section1.style.gridTemplate = 'repeat(1, 500px) / repeat(3, 33%)'
section1.style.gridGap = '1%'

let section2 = document.getElementById('section2')
let ashpokemon = ['025','039','115']

for (p in ashpokemon) {
  let ashleydiv = document.createElement('div')
  // div.style.backgroundImage = `url('https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main.png')`
  ashleydiv.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ashpokemon[p]}.png')`
  ashleydiv.style.backgroundSize = 'contain'
  ashleydiv.style.backgroundRepeat = 'no-repeat'
  ashleydiv.style.border = ''
  ashleydiv.style.height = '200px'
  ashleydiv.style.margin = '20%'
  section2.appendChild(ashleydiv)

}

section2.style.display = 'grid'
section2.style.gridTemplate = 'repeat(1, 500px) / repeat(3, 33%)'
section2.style.gridGap = '1%'

let section3 = document.getElementById('section3')
let alpokemon = ['658','392','133']

for (p in alpokemon) {
  let aldanediv = document.createElement('div')
  // div.style.backgroundImage = `url('https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main.png')`
  aldanediv.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${alpokemon[p]}.png')`
  aldanediv.style.backgroundSize = 'contain'
  aldanediv.style.backgroundRepeat = 'no-repeat'
  aldanediv.style.border = ''
  aldanediv.style.height = '200px'
  aldanediv.style.margin = '20%'
  section3.appendChild(aldanediv)

}

section3.style.display = 'grid'
section3.style.gridTemplate = 'repeat(1, 500px) / repeat(3, 33%)'
section3.style.gridGap = '1%'

let section4 = document.getElementById('section4')
let mopokemon = ['009','022','030']

for (p in mopokemon) {
  let modiv = document.createElement('div')
  // div.style.backgroundImage = `url('https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main.png')`
  modiv.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${mopokemon[p]}.png')`
  modiv.style.backgroundSize = 'contain'
  modiv.style.backgroundRepeat = 'no-repeat'
  modiv.style.border = ''
  modiv.style.height = '200px'
  modiv.style.margin = '20%'
  section4.appendChild(modiv)

}

section4.style.display = 'grid'
section4.style.gridTemplate = 'repeat(1, 500px) / repeat(3, 33%)'
section4.style.gridGap = '1%'
