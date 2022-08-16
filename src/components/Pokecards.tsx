import { setColor } from '../utils/setBGColor'
import '../styles/Pokecards.css'

type Pokemon = {
    id: number;
    sprite: string;
    shinySprite: string;
    name: string;
    types: any[];
}

export const Pokecard = (props: Pokemon) => {

    let backGroundColor = [];
    backGroundColor = setColor(props.types[0].type.name, props.types[1] ? props.types[1].type.name : null, props.types.length)
    return (
        <div className="PokeCard" style={{
            background: `linear-gradient(${backGroundColor[0]} 20%, ${backGroundColor[1]})`
        }}>
            <div className="pokeNumber">#{props.id}</div>
            <div className="pokeImage">
                <img src={props.sprite} alt={props.name} />
            </div>
            <div className="pokeName">{props.name}</div>
            <div className="pokeTypes">
                <div className="pokeTypeOne">{props.types[0].type.name.toUpperCase()}</div>
                {props.types[1] ? <div className="pokeTypeTwo">{props.types[1].type.name.toUpperCase()}</div> : null}
            </div>
        </div>

    )
}