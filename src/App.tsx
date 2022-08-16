import { useEffect, useState } from 'react'
import './styles/App.css'
import { Pokecard } from './components/Pokecards'
import axios from 'axios'
import './styles/global.css'
import { Header } from './components/Header'
import { setOptionColor } from './utils/setBGColor'

function App() {
  const [pokeURL, setPokeURL] = useState<PokeData[]>([]);
  let [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [pokeSorted, setPokeSorted] = useState<Pokemon[]>(pokemons);
  const [isLoading, setIsLoading] = useState(true)
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    console.log('url catched')
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
      .then(response => {
        setPokeURL(response.data.results)
      });
  }, []);


  useEffect(() => {
    console.log('data catched')
    pokeURL.map(data => {
      axios.get(data.url)
        .then(response => {
          const Pokemon: Pokemon = {
            id: response.data.id,
            sprite: response.data.sprites['front_default'],
            shinySprite: response.data.sprites['front_shiny'],
            name: response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1),
            types: response.data.types,
          };
          pokemons.push(Pokemon)
        })
    })
    setIsLoading(false);
  }, []);


  pokemons.sort(function (a, b) {
    return a.id - b.id;
  });

  const sortByType = (type: string) => {
    if (type == 'all') {
      setPokeSorted(pokemons)
      return;
    }
    pokemons.map(() => {
      setPokeSorted(pokeSorted.filter(element => element.types[0].type.name == type || (element.types[1] != null && element.types[1].type.name == type)));
    })
  }

  const sortByIDorName = (option: string) => {
    if (option == 'id') {
      pokeSorted.sort(function (a, b) {
        return a.id - b.id;
      });
    }
    if (option == 'name') {

    }
  }

  const searchPokemon = (option: string) => {
    pokemons.map(poke => {
      setPokeSorted(pokeSorted.filter(element => element.name.toLowerCase().includes(option.toLowerCase())));
    })
  }

  return (
    <div className="Container">
      <Header></Header>
      <div className="filter_bars">
        <div className="filterByIdOrName">
          <label>SORT BY:</label>
          <select
            onChange={(e) => sortByIDorName(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="name">NAME</option>
          </select>
        </div>
        <div className="filterByType">
          <label>TYPES:</label>
          <select id="typeSelected"
            onChange={(event) => sortByType(event.target.value)}>
            {pokeFilterByType.map((item: PokeTypes) => {
              return (
                <option
                  value={item.value}
                  style={{ background: setOptionColor(item.value) }}
                >{item.label}</option>
              )
            }
            )}
          </select>
        </div>
        <div className="searchBar">
          <div className="searchTitle">
            <label> SEARCH POKEMON </label>
          </div>
          <div className="search_bar">
            <div className="searchIcon">
              <img src="https://cdn.icon-icons.com/icons2/621/PNG/512/magnifier-1_icon-icons.com_56924.png" alt="Search Icon" />
            </div>
            <div className="searchInput">
              <input
                type="text"
                id="inputText"
                placeholder='Pokemon name...'
                onChange={(e) => searchPokemon(e.target.value)}
              />
            </div>
          </div>
        </div>

      </div>
      {!isLoading && (
        <div className="PokeContainer">
          <div className="Poke-Cards">
            {pokeSorted.map(poke => (
              <Pokecard
                id={poke.id}
                name={poke.name}
                sprite={poke.sprite}
                types={poke.types}
                shinySprite={poke.shinySprite}
              />
            ))}
          </div>
        </div>
      )}
      {isLoading && (
        <div className='loadingScreen'>
          <p>Carregando...</p>
          <img src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif" />
        </div>
      )}
    </div>
  )
}

export default App

let pokeFilterByType: PokeTypes[] = [
  { "label": 'ALL', "value": "all" },
  { "label": 'BUG', "value": "bug" },
  { "label": 'DRAGON', "value": "dragon" },
  { "label": 'ELECTRIC', "value": "electric" },
  { "label": 'FAIRY', "value": "fairy" },
  { "label": 'FIGHTING', "value": "fighting" },
  { "label": 'FIRE', "value": "fire" },
  { "label": 'FLYING', "value": "flying" },
  { "label": 'GHOST', "value": "ghost" },
  { "label": 'GRASS', "value": "grass" },
  { "label": 'GROUND', "value": "ground" },
  { "label": 'ICE', "value": "ice" },
  { "label": 'NORMAL', "value": "normal" },
  { "label": 'POISON', "value": "poison" },
  { "label": 'PSYCHIC', "value": "psychic" },
  { "label": 'ROCK', "value": "rock" },
  { "label": 'STEEL', "value": "steel" },
  { "label": 'WATER', "value": "water" },
];

type Pokemon = {
  id: number;
  sprite: string;
  shinySprite: string;
  name: string;
  types: any[];
}

type PokeData = {
  name: string;
  url: string;
}

interface PokeTypes {
  label: string;
  value: string;
}

interface Props {
  Types: PokeTypes[];
}