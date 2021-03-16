import { useContext } from "react"
import { Contexts } from "../../contexts/Contexts";
import { SearchBarStyles } from "./SearchBarStyle"

export const SearchBar = () => {

    const {handleSearchBar,setUser,fetchOne} = useContext(Contexts);

    return (
        <SearchBarStyles>
        <div className="formContainer">
            <div className="formBox">
            <button onClick={handleSearchBar} className="closeButton">
                <img src="cancel.svg"/>
                </button>
                <form>
                    <input
                    onChange={e=>setUser(e.target.value)} 
                    placeholder="Digite o nome do estagiário" 
                    type="text"/>
                    <button onClick={fetchOne}>Buscar</button>
                </form>
            </div>
        </div>
        </SearchBarStyles>
    )
}