requestAPI = (pokemon, container) => {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
      poke = new Pokemon(data["name"],
       data["stats"][2]["base_stat"],
       data["stats"][0]["base_stat"],
       data["stats"][0]["base_stat"],
       data["abilities"][0]["ability"]["name"],
       data["sprites"]["front_default"],container)
    }
};
xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`, true);
xhttp.send();
}



class Pokemon {
constructor(name, hp, attack, defense, abilities,picture,container) {
this.name = name;
this.hp = hp;
this.attack = attack;
this.defense = defense;
this.abilities = abilities;
this.picture = picture;
container.push(this);
}
}

class Trainer {
constructor(name) {
    this.name = name;
    this.collector = [];
}
get(pokemonName){
  requestAPI(pokemonName, this.collector);
}

all(){
  return this.collector;
}

}



createDiv = (pokemon, section) => {
let cont = document.createElement('div')
let p = document.createElement('p')
let p1 = document.createElement('p1')
let p2 = document.createElement('p2')
let p3 = document.createElement('p3')
let p4 = document.createElement('p4')
let img = document.createElement('img')
p.innerText = pokemon['name']
p1.innerText = 'Defense   ' + pokemon['defense']
p2.innerText = 'Attack   ' + pokemon['attack']
p3.innerText = 'Hp   ' + pokemon['hp']
p4.innerText = 'Ability   ' + pokemon['ability']
img.setAttribute('src', pokemon['picture'])
cont.appendChild(p)
cont.appendChild(p1)
cont.appendChild(p2)
cont.appendChild(p3)
cont.appendChild(p4)
cont.appendChild(img)
p = document.getElementById(section)
p.appendChild(cont)
}
mohammed = new Trainer("mohammed")
ashley = new Trainer("ashley")
devin = new Trainer("devin")
aldane = new Trainer("aldane")
ashley.get("pikachu")
ashley.get("jigglypuff")
ashley.get("kangaskhan")
mohammed.get("nidorina")
mohammed.get("fearow")
mohammed.get("blastoise")
devin.get("ekans")
devin.get("onix")
devin.get("charizard")
aldane.get("infernape")
aldane.get("greninja")
aldane.get("eevee")

function appendDiv(){
devinSection = devin.all()
createDiv(devinSection[0],"devin-section")
createDiv(devinSection[1],"devin-section")
createDiv(devinSection[2],"devin-section")
ashleySection = ashley.all()
createDiv(ashleySection[0],"ashley-section")
createDiv(ashleySection[1],"ashley-section")
createDiv(ashleySection[2],"ashley-section")
aldaneSection = aldane.all()
createDiv(aldaneSection[0],"aldane-section")
createDiv(aldaneSection[1],"aldane-section")
createDiv(aldaneSection[2],"aldane-section")
mohammedSection = mohommed.all()
createDiv(mohammedSection[0],"mohammed-section")
createDiv(mohommedSection[1],"mohammed-section")
createDiv(mohammedSection[2],"mohammed-section")
}
window.setTimeout(appendDiv, 200)
