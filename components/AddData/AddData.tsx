import { useContext } from "react"
import { Contexts } from "../../contexts/Contexts"
import { AddDataStyles } from "./AddDataStyles"

export const AddData = () => {

    const { handleAddUser, 
        setName, 
        setTeam,
        setClients,
        setFounds, 
        setMeet, 
        setSystem,
        setPerformit, 
        setKnowlodge,
        createRegister} = useContext(Contexts);

    return (
        <AddDataStyles>
            <div>
                <button 
                onClick={handleAddUser}
                className="closeButton"><img src="cancel.svg"/></button>
                <h3>Adicionar Registros</h3>
                <form onSubmit={createRegister}>
                    <label>Digite seu nome:</label>
                    <input 
                    onChange={e=>setName(e.target.value)}
                    placeholder="Digite o nome" type="text" />
                    <label>Digite a sua equipe:</label>
                    <input 
                    onChange={e=>setTeam(e.target.value)}
                    placeholder="Digite a Equipe" type="text" />
                    <label>Quais clientes você teve contato ao longo da semana?</label>
                    <input
                        onChange={e=>setClients(e.target.value)}
                        placeholder="Clientes"
                        type="text" />
                    <label>Quais tipos de fundo você teve contato esta semana?</label>
                    <input
                        onChange={e=>setFounds(e.target.value)}
                        placeholder="Fundos"
                        type="text" />
                    <label>Participou de alguma reunião com cliente? Qual era o problema que estava sendo resolvido? Qual a causa raiz do problema (erro nosso ou erro de quem está usandoa plataforma)? alguma solução foi alcançada?</label>
                    <input
                        onChange={e=>setMeet(e.target.value)}
                        placeholder="Reuniões, problemas, soluções"
                        type="text" />
                    <label>Você utilizou o sistema esta semana? Qual tela? Qual o objetivo do que você fez?</label>
                    <input 
                        onChange={e=>setSystem(e.target.value)}
                        placeholder="O que fez no sistema.."
                        type="text" />
                    <label>Qual sua 1ª impressão com o PerformIt? Na sua opinião qual foi a parte do sistema mais complexa de entender até então? E a mais simples?</label>
                    <input
                        onChange={e=>setPerformit(e.target.value)}
                        placeholder="Infos sobre o performit"
                        type="text" />
                    <label>Compartilhe 1 conhecimento adquirido esta semana sobre mercado financeiro.</label>
                    <input
                        onChange={e=>setKnowlodge(e.target.value)}
                        placeholder="Conhecimento adquirido"
                        type="text" />
                        <button type="submit">Adicionar registros</button>
                </form>
            </div>
        </AddDataStyles>
    )
}