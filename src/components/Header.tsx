import { useState } from "react"
import '../styles/header.css'

export const Header = () => {
    const [theme, setTheme] = useState<string>('light')
    return (
        <div className="pokeHeader">
            <label className="switch">
                <input type="checkbox" onClick={() => {
                    const fontColor = document.getElementById('filter_bars');
                    if (theme == 'light') {
                        setTheme('dark');
                        document.body.style.backgroundImage = "url('https://i.ibb.co/5KsYhFT/Dark-Background.png')"
                        document.body.style.transition = 'background 0.5s'
                        if (fontColor) {
                            fontColor.style.color = 'white';
                            fontColor.style.textShadow = '1px 1px 3px #000000'
                        }
                    } else {
                        setTheme('light');
                        document.body.style.backgroundImage = "url('https://i.ibb.co/J3K0rF2/Light-Background.png')"
                        document.body.style.transition = 'background 0.5s'
                        if (fontColor) fontColor.style.color = 'black';
                        if (fontColor) {
                            fontColor.style.color = 'black';
                            fontColor.style.textShadow = 'none'
                        }
                    }
                }} />
                <span className="slider round"></span>
            </label>
            <img src="https://i.ibb.co/PhckP2C/pokedex-Logo.png" id="pokedexLogo"></img>
        </div>
    )
}