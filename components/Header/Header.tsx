import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderStyle } from "./HeaderStyle"

export const Header = () => {

    const [isSearchBar, setIsSearchBar] = useState(false);

    const handleSearchBar = () => {
            setIsSearchBar(isSearchBar?false:true);
        }

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