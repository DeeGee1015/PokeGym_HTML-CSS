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
        displayUser(poke)
