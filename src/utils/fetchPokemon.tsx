import axios from 'axios'

type PokeData = {
    name: string;
    url: string;
}

type Pokemon = {
    id: number;
    sprite: string;
    shinySprite: string;
    name: string;
    types: any[];
}


export function fetchPokemon(data: PokeData[]) {
    var Pokedex: Pokemon[] = [];
    data.map((item) => {
        axios.get(item.url)
            .then(response => {
                const Pokemon = {
                    name: response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1),
                    id: response.data.id,
                    types: response.data.types,
                    sprite: response.data.sprites['front_default'],
                    shinySprite: response.data.sprites['front_shiny']
                };
                Pokedex.push(Pokemon)
            });
    });
    return Pokedex;
}