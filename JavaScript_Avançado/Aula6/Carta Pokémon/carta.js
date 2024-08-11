function fetchPokemon() {
    const pokemonNameOrId = document.getElementById('search').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;
    const card = document.getElementById('card');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonType = document.getElementById('pokemon-type');
    const pokemonImage = document.getElementById('pokemon-image');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado!');
            }
            return response.json();
        })
        .then(data => {
            card.style.display = 'block';
            pokemonName.textContent = capitalizeFirstLetter(data.name);
            pokemonType.textContent = 'Tipo: ' + data.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join(', ');
            pokemonImage.src = data.sprites.front_default;
        })
        .catch(error => {
            alert(error.message);
            card.style.display = 'none';
        });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}