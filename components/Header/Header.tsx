import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderStyle } from "./HeaderStyle"

export const Header = () => {

    const {handleSearchBar,isSearchBar} = useContext(Contexts);

return (
    <HeaderStyle>
        <header>
        {isSearchBar && <SearchBar/>}
            <img className="logo" src="logo.png"/>
            <h1>Acompanhamento Semanal</h1>
            <button onClick={handleSearchBar} className="menu"><img src="menu.svg"/></button>
        </header>
    </HeaderStyle>
)
}