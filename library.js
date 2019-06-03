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
