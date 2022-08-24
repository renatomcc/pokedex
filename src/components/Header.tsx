import { useState } from "react"

export const Header = () => {
    const [theme, setTheme] = useState<string>('light')
    return (
        <div className="pokeHeader">
            <label className="switch">
                <input type="checkbox" onClick={() => {
                    const fontColor = document.getElementById('filter_bars');
                    if (theme == 'light') {
                        setTheme('dark');
                        document.body.style.backgroundImage = "url('https://i.ibb.co/wQ1j4g6/dark-Background.jpg')"
                        document.body.style.transition = 'background 0.5s'
                        if (fontColor) {
                            fontColor.style.color = 'white';
                            fontColor.style.textShadow = '1px 1px 3px #000000'
                        }
                    } else {
                        setTheme('light');
                        document.body.style.backgroundImage = "url('https://i.ibb.co/KGWFjpm/light-Background.jpg')"
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
            <img src="https://i.ibb.co/PhckP2C/pokedex-Logo.png"></img>
        </div>
    )
}