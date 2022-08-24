import { setColor, setBG } from '../utils/setBGColor'
import '../styles/Pokecards.css'
import { useEffect, useState } from 'react';

type Pokemon = {
    id: number;
    sprite: string;
    shinySprite: string;
    name: string;
    types: any[];
    favorite: boolean;
}


var favorites: number[] = []
var shinies: number[] = []

const Pokecard = (props: Pokemon) => {


    const setShiny = (data: number) => {
        const shinyPoke = document.getElementById(`shiny${props.id}`);
        if (shinies.includes(data)) {
            shinies.splice(shinies.indexOf(data), 1)
            if (shinyPoke != null) {
                shinyPoke.style.backgroundImage = "url('https://i.ibb.co/CbmPrQ1/poke-Shiny-Off.png')"
                shinyPoke.ariaKeyShortcuts
            }
        } else {
            shinies.push(data);
            if (shinyPoke != null) {
                shinyPoke.style.backgroundImage = "url('https://i.ibb.co/QF8WLd2/poke-Shiny-On.png)"
            }
        }
        console.log(shinies)
    }

    const setFav = (data: number) => {
        const poke = document.getElementById(`poke${data}`);

        if (!favorites.includes(data)) {
            if (poke != null) {
                favorites.push(data)
                console.log(`favoritado - ${favorites}`)
                poke.style.backgroundImage = "url('https://i.ibb.co/Qv3hHnN/pokeFav.png')"
            }
        } else {
            if (poke != null) {
                favorites.splice(favorites.indexOf(data), 1)
                console.log(`desfavoritado - ${favorites}`)
                poke.style.backgroundImage = "url('https://i.ibb.co/km8fH2G/poke-No-Fav.png')"
            }
        }
    }

    let backGroundColor = [];
    backGroundColor = setColor(props.types[0].type.name, props.types[1] ? props.types[1].type.name : null, props.types.length)
    return (
        <div className="PokeCard" style={{
            background: `linear-gradient(${backGroundColor[0]} 20%, ${backGroundColor[1]})`
        }}>
            <div className="pokeUpperPart">
                <div className="pokeNumber">#{props.id}</div>
                <div className="pokeShiny"
                    style={{
                        backgroundImage: shinies.includes(props.id) ? "url('https://i.ibb.co/QF8WLd2/poke-Shiny-On.png')" : "url('https://i.ibb.co/CbmPrQ1/poke-Shiny-Off.png')"
                    }}
                    id={`shiny${props.id}`}
                    onClick={() => {
                        const shinyPoke = document.getElementById(`shiny${props.id}`);
                        const shinyImage = document.getElementById(`img${props.id}`);
                        if (shinies.includes(props.id)) {
                            shinies.splice(shinies.indexOf(props.id), 1)
                            if (shinyPoke != null) {
                                shinyPoke.style.backgroundImage = "url('https://i.ibb.co/CbmPrQ1/poke-Shiny-Off.png')"
                                shinyImage?.setAttribute("src", `${props.sprite}`)
                            }
                        } else {
                            shinies.push(props.id);
                            if (shinyPoke != null) {
                                shinyPoke.style.backgroundImage = "url('https://i.ibb.co/QF8WLd2/poke-Shiny-On.png')"
                                shinyImage?.setAttribute("src", `${props.shinySprite}`)
                            }
                        }
                    }}
                />
                <div className="pokeFav"
                    style={{
                        backgroundImage: favorites.includes(props.id) ? "url('https://i.ibb.co/Qv3hHnN/pokeFav.png')" : "url('https://i.ibb.co/km8fH2G/poke-No-Fav.png')"
                    }}
                    id={`poke${props.id}`}
                    onClick={() => { setFav(props.id) }}
                ></div>
            </div>
            <div className="pokeImage">
                <img id={`img${props.id}`} src={shinies.includes(props.id) ? props.shinySprite : props.sprite} alt={props.name}
                />
            </div>
            <div className="pokeName">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
            <div className="pokeTypes">
                <div className="pokeTypeOne"> <img src={setBG(props.types[0].type.name)} alt={props.types[0].type.name} title={props.types[0].type.name.toUpperCase()} /></div>
                {props.types[1] ? <div className="pokeTypeTwo"><img src={setBG(props.types[1].type.name)} alt={props.types[1].type.name} title={props.types[1].type.name.toUpperCase()} /></div> : null}
            </div>
        </div>
    )
}

export default Pokecard;
export { favorites, shinies }