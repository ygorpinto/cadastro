import { SearchBarStyles } from "./SearchBarStyle"

export const SearchBar = () => {
    return (
        <SearchBarStyles>
        <div className="formContainer">
            <div className="formBox">
            <button className="closeButton"><img src="cancel.svg"/></button>
                <form>
                    <input placeholder="Digite o nome do estagiário" type="text"/>
                    <button>Buscar</button>
                </form>
            </div>
        </div>
        </SearchBarStyles>
    )
}