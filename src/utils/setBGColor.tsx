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
            return 'https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png'
        case 'dark':
            return 'https://archives.bulbagarden.net/media/upload/d/d5/Dark_icon_SwSh.png'
        case 'dragon':
            return 'https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png'
        case 'electric':
            return 'https://archives.bulbagarden.net/media/upload/7/7b/Electric_icon_SwSh.png'
        case 'fairy':
            return 'https://archives.bulbagarden.net/media/upload/c/c6/Fairy_icon_SwSh.png'
        case 'fighting':
            return 'https://archives.bulbagarden.net/media/upload/3/3b/Fighting_icon_SwSh.png'
        case 'fire':
            return 'https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png'
        case 'flying':
            return 'https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png'
        case 'ghost':
            return 'https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png'
        case 'grass':
            return 'https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png'
        case 'ground':
            return 'https://archives.bulbagarden.net/media/upload/2/27/Ground_icon_SwSh.png'
        case 'ice':
            return 'https://archives.bulbagarden.net/media/upload/1/15/Ice_icon_SwSh.png'
        case 'steel':
            return 'https://archives.bulbagarden.net/media/upload/0/09/Steel_icon_SwSh.png'
        case 'normal':
            return 'https://archives.bulbagarden.net/media/upload/9/95/Normal_icon_SwSh.png'
        case 'poison':
            return 'https://archives.bulbagarden.net/media/upload/8/8d/Poison_icon_SwSh.png'
        case 'psychic':
            return 'https://archives.bulbagarden.net/media/upload/7/73/Psychic_icon_SwSh.png'
        case 'rock':
            return 'https://archives.bulbagarden.net/media/upload/1/11/Rock_icon_SwSh.png'
        case 'water':
            return 'https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png'
    }
    return 'not finded'
}

export { setColor, setOptionColor, setBG }