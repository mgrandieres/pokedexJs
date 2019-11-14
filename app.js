const pokedexJson = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
const pokemons = [];
const row = document.getElementById("row");

function search() 
{
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    col = row.getElementsByTagName("div");
    for (i = 0; i < col.length; i++) {
        a = col[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            col[i].style.display = "";
        } else {
            col[i].style.display = "none";
        }
    }
}

function import_pokemon()
{
    fetch(pokedexJson)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                pokemons.push(...data.pokemon);
                //console.log(heroes);
                pokemons.forEach(pokemon => {
                    //console.log(pokemon);
                    const img = document.createElement('img');
                    img.setAttribute("src", pokemon.img);
                    const col = document.createElement('div');
                    col.setAttribute("class", "col-md-4");
                    const name = document.createElement('p');
                    name.innerHTML = pokemon.name;

                    // COLOR TYPE 
                    const type = pokemon.type;
                    if (type.includes('Grass'))
                    {
                        col.style.backgroundColor = "#678E64";
                    }
                    else if (type.includes('Fire'))
                    {
                        col.style.backgroundColor = "#CC7A6B";
                    }
                    else if (type.includes('Water'))
                    {
                        col.style.backgroundColor = "#6BB4CC";
                    }

                    else if (type.includes('Bug'))
                    {
                        col.style.backgroundColor = "#78CC6B";
                    }

                    else if (type.includes('Poison'))
                    {
                        col.style.backgroundColor = "#9C82B2";
                    }

                    else if (type.includes('Electric'))
                    {
                        col.style.backgroundColor = "#EECF6F";
                    }

                    else if (type.includes('Ground') || type.includes('Rock'))
                    {
                        col.style.backgroundColor = "#A06941";
                    }

                    else if (type.includes('Psychic'))
                    {
                        col.style.backgroundColor = "#DB98DA";
                    }

                    else if (type.includes('Normal'))
                    {
                        col.style.backgroundColor = "#C6C5C6";
                    }

                    else if (type.includes('Fighting'))
                    {
                        col.style.backgroundColor = "#4D3C28";
                    }

                    else if (type.includes('Ice'))
                    {
                        col.style.backgroundColor = "#528298";
                    }
                    else if (type.includes('Dragon'))
                    {
                        col.style.backgroundColor = "#514A92";
                    }
                    /** Appenchild */
                    row.appendChild(col);
                    col.appendChild(name);
                    col.appendChild(img);
                });
            })
}
import_pokemon();


