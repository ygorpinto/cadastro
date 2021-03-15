import { HeaderStyle } from "./HeaderStyle"

export const Header = () => {
return (
    <HeaderStyle>
        <header>
            <img className="logo" src="logo.png"/>
            <h1>Acompanhamento Semanal</h1>
            <button className="menu"><img src="menu.svg"/></button>
        </header>
    </HeaderStyle>
)
}