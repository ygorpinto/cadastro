import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { Loading } from "../Loading/Loading";
import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderStyle } from "./HeaderStyle"

export const Header = () => {

    const { handleSearchBar, isSearchBar, isLoading } = useContext(Contexts);

    return (
        <>
            {isLoading ? <Loading /> : (
                <HeaderStyle>
                    <header>
                        {isSearchBar && <SearchBar />}
                        <h1>Gerenciamento de Usuários</h1>
                        <button onClick={handleSearchBar} className="menu"><img src="menu.svg" /></button>
                    </header>
                </HeaderStyle>
            )}
        </>
    )
}