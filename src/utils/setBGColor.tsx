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
            return 'https://i.ibb.co/BsKKdv5/Bug-icon.png'
        case 'dark':
            return 'https://i.ibb.co/qWQLNkn/Dark-icon.webp'
        case 'dragon':
            return 'https://i.ibb.co/fSqy2St/Dragon-icon.webp'
        case 'electric':
            return 'https://i.ibb.co/X78Ptkx/Electric-icon.webp'
        case 'fairy':
            return 'https://i.ibb.co/NtQh7dR/Fairy-icon.png'
        case 'fighting':
            return 'https://i.ibb.co/2n0zNWg/Fighting-icon.png'
        case 'fire':
            return 'https://i.ibb.co/mJtF62v/Fire-icon.webp'
        case 'flying':
            return 'https://i.ibb.co/fY3Yn1N/Flying-icon.webp'
        case 'ghost':
            return 'https://i.ibb.co/rcLCJGm/Ghost-icon.webp'
        case 'grass':
            return 'https://i.ibb.co/3B2pQjz/Grass-icon.webp'
        case 'ground':
            return 'https://i.ibb.co/mBM0LxR/Ground-icon.webp'
        case 'ice':
            return 'https://i.ibb.co/WnMMTs9/Ice-icon.webp'
        case 'steel':
            return 'https://i.ibb.co/ZzK1XYY/Steel-icon.webp'
        case 'normal':
            return 'https://i.ibb.co/fHqy5ss/Normal-icon.png'
        case 'poison':
            return 'https://i.ibb.co/2MjLVcc/Poison-icon.webp'
        case 'psychic':
            return 'https://i.ibb.co/d0XyN7k/Psychic-icon.png'
        case 'rock':
            return 'https://i.ibb.co/3mvCGVY/Rock-icon.png'
        case 'water':
            return 'https://i.ibb.co/LNsRpNc/Water-icon.webp'
    }
    return 'not finded'
}

export { setColor, setOptionColor, setBG }