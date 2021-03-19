import { useContext } from "react"
import { Contexts } from "../../contexts/Contexts"
import { AddDataStyles } from "./AddDataStyles"

export const AddData = () => {

    const {
        setName,
        setEmail,
        handleAddUser,
        createRegister} = useContext(Contexts);

    return (
        <AddDataStyles>
            <div>
                <button 
                onClick={handleAddUser}
                className="closeButton"><img src="cancel.svg"/></button>
                <h3>Novo Usuário</h3>
                <form onSubmit={createRegister}>
                    <label>Digite seu nome:</label>
                    <input 
                    onChange={e=>setName(e.target.value)}
                    placeholder="Digite o nome" type="text" />
                    <label>Digite a sua email:</label>
                    <input 
                    onChange={e=>setEmail(e.target.value)}
                    placeholder="Digite o Email" type="text" />
                        <button type="submit">Criar usuário</button>
                </form>
            </div>
        </AddDataStyles>
    )
}