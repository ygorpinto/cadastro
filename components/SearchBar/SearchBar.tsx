import { useContext } from "react"
import { Contexts } from "../../contexts/Contexts";
import { SearchBarStyles } from "./SearchBarStyle"

export const SearchBar = () => {

    const { handleSearchBar, setUser, fetchOne, handleShowAll, handleAddUser } = useContext(Contexts);

    return (
        <SearchBarStyles>
            <div className="formContainer">
                <div className="formBox">
                    <button onClick={handleSearchBar} className="closeButton">
                        <img src="cancel.svg" />
                    </button>
                    <form>
                        <input
                            onChange={e => setUser(e.target.value)}
                            placeholder="Digite o nome do estagiário"
                            type="text" />
                        <button onClick={fetchOne}>Buscar</button>
                    </form>
                    <div className="allRegister">
                        <button onClick={handleShowAll}>Todos os registros</button>
                    </div>
                    <div className="addUser">
                        <button onClick={handleAddUser}><img src="add.svg"/></button>
                    </div>
                </div>
            </div>
        </SearchBarStyles>
    )
}