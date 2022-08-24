function setColor(color1: string, color2: string | null, length: number) {

    let firstColor, secondColor, finalColor;
    switch (color1) {
        case 'bug':
            firstColor = 'rgba(63,229,106,0.9)'
            break;
        case 'dark':
            firstColor = 'rgba(62, 62, 62, 0.9)'
            break;
        case 'dragon':
            firstColor = 'rgba(19,59,187,0.9)'
            break;
        case 'electric':
            firstColor = 'rgba(207,255,15,0.9)'
            break;
        case 'fairy':
            firstColor = 'rgba(255,73,219,0.9)'
            break;
        case 'fighting':
            firstColor = 'rgba(193,67,67,0.9)'
            break;
        case 'fire':
            firstColor = 'rgba(255,138,0,0.9)'
            break;
        case 'flying':
            firstColor = 'rgba(91, 253, 255,0.9)'
            break;
        case 'ghost':
            firstColor = 'rgba(118,44,166,0.9)'
            break;
        case 'grass':
            firstColor = 'rgba(6,165,48,0.9)'
            break;
        case 'ground':
            firstColor = 'rgba(144, 140, 45,0.9)'
            break;
        case 'ice':
            firstColor = 'rgba(17,214,232,0.9)'
            break;
        case 'steel':
            firstColor = 'rgba(127,158,161,0.9)'
            break;
        case 'normal':
            firstColor = 'rgba(225,197,152,0.9)'
            break;
        case 'poison':
            firstColor = 'rgba(160,7,166,0.7)'
            break;
        case 'psychic':
            firstColor = 'rgba(255,131,187,1)'
            break;
        case 'rock':
            firstColor = 'rgba(178,163,163,0.9)'
            break;
        case 'water':
            firstColor = 'rgba(43,141,241,0.9)'
            break;
    }
    if (length == 2) {
        switch (color2) {
            case 'bug':
                secondColor = 'rgba(63,229,106,0.95)'
                break;
            case 'dark':
                secondColor = 'rgba(62, 62, 62, 0.9)'
                break;
            case 'dragon':
                secondColor = 'rgba(19,59,187,0.95)'
                break;
            case 'electric':
                secondColor = 'rgba(207,255,15,0.95)'
                break;
            case 'fairy':
                secondColor = 'rgba(255,73,219,0.9)'
                break;
            case 'fighting':
                secondColor = 'rgba(193,67,67,0.95)'
                break;
            case 'fire':
                secondColor = 'rgba(255,138,0,0.95)'
                break;
            case 'flying':
                secondColor = 'rgba(205,228,229,0.95)'
                break;
            case 'ghost':
                secondColor = 'rgba(118,44,166,0.95)'
                break;
            case 'grass':
                secondColor = 'rgba(6,165,48,0.95)'
                break;
            case 'ground':
                secondColor = 'rgba(166,172,0,0.95)'
                break;
            case 'ice':
                secondColor = 'rgba(17,214,232,0.95)'
                break;
            case 'steel':
                secondColor = 'rgba(127,158,161,0.95)'
                break;
            case 'normal':
                secondColor = 'rgba(225,197,152,0.95)'
                break;
            case 'poison':
                secondColor = 'rgba(160,7,166,0.7)'
                break;
            case 'psychic':
                secondColor = 'rgba(255,131,187,0.9)'
                break;
            case 'rock':
                secondColor = 'rgba(178,163,163,0.95)'
                break;
            case 'water':
                secondColor = 'rgba(43,141,241,0.95)'
                break;
        }
    } else {
        secondColor = firstColor;
    }
    finalColor = [firstColor, secondColor];
    return finalColor
}

function setOptionColor(id: string | undefined) {
    let optionColor;
    switch (id) {
        case 'bug':
            optionColor = 'rgba(63,229,106,0.6)'
            break;
        case 'dark':
            optionColor = 'rgba(62, 62, 62,0.5)'
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

function setBG(type: string) {
    switch (type) {
        case 'bug':
            return 'src/images/bug_Icon.png'
        case 'dark':
            return 'src/images/dark_Icon.png'
        case 'dragon':
            return 'src/images/dragon_Icon.png'
        case 'electric':
            return 'src/images/electric_Icon.png'
        case 'fairy':
            return 'src/images/fairy_Icon.png'
        case 'fighting':
            return 'src/images/fighting_Icon.png'
        case 'fire':
            return 'src/images/fire_Icon.png'
        case 'flying':
            return 'src/images/flying_Icon.png'
        case 'ghost':
            return 'src/images/ghost_Icon.png'
        case 'grass':
            return 'src/images/grass_Icon.png'
        case 'ground':
            return 'src/images/ground_Icon.png'
        case 'ice':
            return 'src/images/ice_Icon.png'
        case 'steel':
            return 'src/images/steel_Icon.png'
        case 'normal':
            return 'src/images/normal_Icon.png'
        case 'poison':
            return 'src/images/poison_Icon.png'
        case 'psychic':
            return 'src/images/psychic_Icon.png'
        case 'rock':
            return 'src/images/rock_Icon.png'
        case 'water':
            return 'src/images/water_Icon.png'
    }
    return 'a'
}

export { setColor, setOptionColor, setBG }