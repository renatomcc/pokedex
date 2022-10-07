import { useEffect, useState } from 'react'
import './styles/App.css'
import Pokecard from './components/Pokecards'
import axios from 'axios'
import './styles/global.css'
import { Header } from './components/Header'
import { setOptionColor } from './utils/setBGColor'
import { favorites, shinies } from './components/Pokecards'

function App() {
  const [pokedex, setPokedex] = useState<Pokemon[]>([])
  const [pokeSorted, setPokeSorted] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const [searchPoke, setSearchPoke] = useState('');
  const [numOfPokes, setNumOfPokes] = useState(50);
  const [currentSort, setCurrentSort] = useState('id')
  const [currentType, setCurrentType] = useState('all')

  const slicedDex: Pokemon[] = pokeSorted.slice(0, numOfPokes);
  var filteredPokemons = searchPoke.length > 0 ? pokeSorted.filter(poke => poke.name.includes(searchPoke.toLowerCase())).slice(0, numOfPokes) : slicedDex;


  async function fetchData() {
    Promise.all(
      await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=898')
        .then((data: any) => {
          return data.data.results
        })
    ).then((response) => {
      fetchPokemon(response)
    })
  }

  async function fetchPokemon(data: PokeData[]) {
    Promise.all(
      data.map(async (data: any) => {
        return fetch(data.url).then(response => {
          return response.json()
        })
      })
    ).then(result => {
      const pokemons = result.map(poke => {
        return {
          id: poke.id,
          sprite: poke.sprites.other.home['front_default'],
          spriteShiny: poke.sprites.other.home['front_shiny'],
          name: poke.name,
          types: poke.types,
          favorite: false,
        }
      })
      setPokedex(pokemons)
      setPokeSorted(pokemons)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const sortBy = (option: string) => {
    setCurrentSort(option)
    if (option == 'id' && currentType == 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      setPokeSorted(pokedex.sort(function (a, b) {
        return a.id - b.id;
      }))
    }
    if (option == 'id' && currentType != 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      setPokeSorted(pokedex.filter(element => element.types[0].type.name == currentType || (element.types[1] != null && element.types[1].type.name == currentType)))
    }
    if (option == 'name' && currentType == 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      setPokeSorted([...pokedex].sort((a, b) =>
        a.name > b.name ? 1 : -1,
      ));
    }
    if (option == 'name' && currentType != 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      setPokeSorted([...pokedex].sort((a, b) =>
        a.name > b.name ? 1 : -1,
      ).filter(element => element.types[0].type.name == currentType || (element.types[1] != null && element.types[1].type.name == currentType)));
    }
    if (option == 'favorites' && currentType == 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      var newPokedex: Pokemon[] = [];
      pokedex.map(item => {
        if (favorites.includes(item.id)) newPokedex.push(item)
      })
      setPokeSorted(newPokedex)
    }
    if (option == 'favorites' && currentType != 'all') {
      var newPokedex: Pokemon[] = [];
      pokedex.map(item => {
        if (favorites.includes(item.id)) newPokedex.push(item)
      })
      setPokeSorted(newPokedex.filter(element => element.types[0].type.name == currentType || (element.types[1] != null && element.types[1].type.name == currentType)))
    }
  }

  const sortByType = (option: string) => {
    setCurrentType(option);
    if (currentSort == 'id' && option == 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      setPokeSorted(pokedex)
    }
    if (currentSort == 'id' && option != 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      setPokeSorted(pokedex.filter(element => element.types[0].type.name == option || (element.types[1] != null && element.types[1].type.name == option)))
    }
    if (currentSort == 'name' && option == 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      setPokeSorted(pokedex.sort((a, b) => a.name > b.name ? 1 : -1))
    }
    if (currentSort == 'name' && option != 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      setPokeSorted(pokedex.filter(element => element.types[0].type.name == option || (element.types[1] != null && element.types[1].type.name == option)).sort((a, b) => a.name > b.name ? 1 : -1))
    }
    if (currentSort == 'favorites' && option == 'all') {
      console.log(`currentSort: ${currentSort} - currentType: ${currentType}`)
      var newPokedex: Pokemon[] = [];
      pokedex.map(item => {
        if (favorites.includes(item.id)) newPokedex.push(item)
      })
      setPokeSorted(newPokedex)
    }
    if (currentSort == 'favorites' && option != 'all') {
      var newPokedex: Pokemon[] = [];
      pokedex.map(item => {
        if (favorites.includes(item.id)) newPokedex.push(item)
      })
      setPokeSorted(newPokedex.filter(element => element.types[0].type.name == option || (element.types[1] != null && element.types[1].type.name == option)))
    }
  }

  const loadMore = () => {
    setNumOfPokes(numOfPokes + 50)
    console.log(filteredPokemons)
  }

  return (
    <div className="Container">
      <Header />
      <div className="filter_bars" id='filter_bars'>
        <div className="filterByIdOrName">
          <label>SORT BY:</label>
          <select
            onChange={(e) => sortBy(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="name">NAME</option>
            <option value="favorites">FAVORITES</option>
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
              <img src="https://i.ibb.co/rp31w0K/search-Icon.png" alt="Search Icon" />
            </div>
            <div className="searchInput">
              <input
                type="text"
                id="inputText"
                placeholder='Pokemon name...'
                onChange={(e) => setSearchPoke(e.target.value)}
                value={searchPoke}
              />
            </div>
          </div>
        </div>
      </div>
      {!isLoading && (
        <>
          <div className="PokeContainer">
            <div className="Poke-Cards">
              {filteredPokemons.map(poke => (
                <Pokecard
                  key={poke.id}
                  id={poke.id}
                  name={poke.name}
                  sprite={shinies.includes(poke.id) ? poke.spriteShiny : poke.sprite}
                  types={poke.types}
                  shinySprite={poke.spriteShiny}
                  favorite={false} />
              ))
              }
            </div>
          </div>
          {((slicedDex.length < filteredPokemons.length + 1)) && (
            <div className="load">
              <button id='loadBtn'
                onClick={() => { loadMore() }}
              > Catch more!
                <img src="https://i.ibb.co/6m474Dv/open-Pokeball.png" alt="pokeball" />
              </button>
            </div>
          )}
        </>
      )}
      {isLoading && (
        <div className='loadingScreen'>
          <p>Catching 'Em All!</p>
          <img src="https://i.ibb.co/LxxrXwP/loading-Pikachu.gif" />
        </div>
      )}
    </div>
  )
}

export default App

let pokeFilterByType: PokeTypes[] = [
  { "label": 'ALL', "value": "all" },
  { "label": 'BUG', "value": "bug" },
  { "label": 'DARK', "value": "dark" },
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
  spriteShiny: string;
  name: string;
  types: any[];
  favorite: boolean;
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