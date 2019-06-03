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
