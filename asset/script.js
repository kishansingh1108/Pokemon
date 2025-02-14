// syncrones function used for fetch the data from the api 
async function fetchPokemonData(cardNum) {
    const pokemonName = document.getElementById(`dropdown-box-${cardNum}`).value;
    if (!pokemonName) return;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    // informations in cards after selecting the dropdown value 
    document.getElementById(`card-${cardNum}`).innerHTML = `
      <h3>${data.name.toUpperCase()}</h3>
      <p><b>HP:</b> <span id="hp-${cardNum}">${data.stats[0].base_stat}</span></p>
      <p><b>Attack:</b> <span id="attack-${cardNum}">${data.stats[1].base_stat}</span></p>
      <p><b>Defense:</b> <span id="defense-${cardNum}">${data.stats[2].base_stat}</span></p>
      <p><b>Speed:</b> <span id="speed-${cardNum}">${data.stats[5].base_stat}</span></p>
      <img src="${data.sprites.front_default}" alt="${data.name}"/>
    `;
  }

  // function for comparing both the dropdown value
  
  function comparePokemon() {
    const stats = ["hp", "attack", "defense", "speed"];
    let resultText = "";

    stats.forEach(stat => {
      const stat1 = parseInt(document.getElementById(`${stat}-1`).textContent);
      const stat2 = parseInt(document.getElementById(`${stat}-2`).textContent);
      //conditional statement for comparing both pokemon
      if (stat1 > stat2) {
        document.getElementById(`${stat}-1`).style.color = "green";
        document.getElementById(`${stat}-2`).style.color = "red";
        resultText += `${stat.toUpperCase()}: is stronger!<br>`;
      } else if (stat1 < stat2) {
        document.getElementById(`${stat}-2`).style.color = "green";
        document.getElementById(`${stat}-1`).style.color = "red";
        resultText += `${stat.toUpperCase()}:  is stronger!<br>`;
      } else {
        resultText += `${stat.toUpperCase()}: Both are equal!<br>`;
      }
    });

    document.getElementById("comparison-result").innerHTML = resultText;
  }