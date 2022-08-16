function setColor(color1: string, color2: string | null, length: number) {

    let firstColor, secondColor, finalColor;
    switch (color1) {
        case 'bug':
            firstColor = 'rgba(63,229,106,0.5)'
            break;
        case 'dragon':
            firstColor = 'rgba(19,59,187,0.5)'
            break;
        case 'electric':
            firstColor = 'rgba(207,255,15,0.7)'
            break;
        case 'fairy':
            firstColor = 'rgba(255,73,219,0.7)'
            break;
        case 'fighting':
            firstColor = 'rgba(193,67,67,0.5)'
            break;
        case 'fire':
            firstColor = 'rgba(255,138,0,0.7)'
            break;
        case 'flying':
            firstColor = 'rgba(205,228,229,0.5)'
            break;
        case 'ghost':
            firstColor = 'rgba(118,44,166,0.5)'
            break;
        case 'grass':
            firstColor = 'rgba(6,165,48,0.5)'
            break;
        case 'ground':
            firstColor = 'rgba(166,172,0,0.5)'
            break;
        case 'ice':
            firstColor = 'rgba(17,214,232,0.5)'
            break;
        case 'steel':
            firstColor = 'rgba(127,158,161,0.5)'
            break;
        case 'normal':
            firstColor = 'rgba(225,197,152,0.5)'
            break;
        case 'poison':
            firstColor = 'rgba(160,7,166,0.7)'
            break;
        case 'psychic':
            firstColor = 'rgba(255,131,187,0.8)'
            break;
        case 'rock':
            firstColor = 'rgba(178,163,163,0.5)'
            break;
        case 'water':
            firstColor = 'rgba(43,141,241,0.5)'
            break;
    }
    if (length == 2) {
        switch (color2) {
            case 'bug':
                secondColor = 'rgba(63,229,106,0.35)'
                break;
            case 'dragon':
                secondColor = 'rgba(19,59,187,0.35)'
                break;
            case 'electric':
                secondColor = 'rgba(207,255,15,0.35)'
                break;
            case 'fairy':
                secondColor = 'rgba(255,73,219,0.8)'
                break;
            case 'fighting':
                secondColor = 'rgba(193,67,67,0.35)'
                break;
            case 'fire':
                secondColor = 'rgba(255,138,0,0.35)'
                break;
            case 'flying':
                secondColor = 'rgba(205,228,229,0.35)'
                break;
            case 'ghost':
                secondColor = 'rgba(118,44,166,0.35)'
                break;
            case 'grass':
                secondColor = 'rgba(6,165,48,0.35)'
                break;
            case 'ground':
                secondColor = 'rgba(166,172,0,0.35)'
                break;
            case 'ice':
                secondColor = 'rgba(17,214,232,0.35)'
                break;
            case 'steel':
                secondColor = 'rgba(127,158,161,0.35)'
                break;
            case 'normal':
                secondColor = 'rgba(225,197,152,0.35)'
                break;
            case 'poison':
                secondColor = 'rgba(160,7,166,0.35)'
                break;
            case 'psychic':
                secondColor = 'rgba(255,131,187,0.7)'
                break;
            case 'rock':
                secondColor = 'rgba(178,163,163,0.35)'
                break;
            case 'water':
                secondColor = 'rgba(43,141,241,0.35)'
                break;
        }
    } else {
        secondColor = firstColor;
    }
    finalColor = [firstColor, secondColor];
    return finalColor
}

function setOptionColor(id:string | undefined){
    let optionColor;
    switch (id){
        case 'bug':
            optionColor = 'rgba(63,229,106,0.6)'
            break;
        case 'dragon':
            optionColor = 'rgba(19,59,187,0.6)'
            break;
        case 'electric':
            optionColor = 'rgba(207,255,15,0.6)'
            break;
        case 'fairy':
            optionColor = 'rgba(255,73,219,0.6)'
            break;
        case 'fighting':
            optionColor = 'rgba(193,67,67,0.6)'
            break;
        case 'fire':
            optionColor = 'rgba(255,138,0,0.6)'
            break;
        case 'flying':
            optionColor = 'rgba(205,228,229,0.6)'
            break;
        case 'ghost':
            optionColor = 'rgba(118,44,166,0.6)'
            break;
        case 'grass':
            optionColor = 'rgba(6,165,48,0.6)'
            break;
        case 'ground':
            optionColor = 'rgba(166,172,0,0.6)'
            break;
        case 'ice':
            optionColor = 'rgba(17,214,232,0.6)'
            break;
        case 'steel':
            optionColor = 'rgba(127,158,161,0.6)'
            break;
        case 'normal':
            optionColor = 'rgba(225,197,152,0.6)'
            break;
        case 'poison':
            optionColor = 'rgba(160,7,166,0.6)'
            break;
        case 'psychic':
            optionColor = 'rgba(255,131,187,0.6)'
            break;
        case 'rock':
            optionColor = 'rgba(178,163,163,0.6)'
            break;
        case 'water':
            optionColor = 'rgba(43,141,241,0.6)'
            break;
    }
    return optionColor;
}

export  {setColor, setOptionColor}