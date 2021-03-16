import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { InfoContainerStyles } from "./InfoContainerStyles";

export const InfoContainer = () => {

    const {handleStatus,info} = useContext(Contexts);

    return (
        <InfoContainerStyles>
        <div className="info">
            <button onClick={handleStatus}><img src="cancel.svg"/></button>
            {info.map((item,index) => (
                <div className="itens">
                    <h3 className="index">{index+1}º semana.</h3>
                    <div className="clientes">
                        <strong>Quais clientes você pode ter contato ao longo da semana?</strong>
                        <p>{item.clientes}</p>
                    </div>
                    <div className="fundos">
                        <strong>Quais tipos de fundo você teve contato esta semana?</strong>
                        <p>{item.fundos}</p> 
                    </div>
                    <div className="reuniao">
                        <strong>Participou de alguma reunião com cliente? Qual era o problema que estava sendo resolvido? Qual a causa raiz do problema (erro nosso ou erro de quem está usandoa plataforma)? alguma solução foi alcançada?</strong>
                        <p>{item.reuniao}</p>
                    </div>
                    <div className="sistema">
                        <strong>Você utilizou o sistema esta semana? Qual tela? Qual o objetivo do que você fez?</strong>
                        <p>{item.sistema}</p> 
                    </div>
                    <div className="performit">
                        <strong>Qual sua 1ª impressão com o PerformIt? Na sua opinião qual foi a parte do sistema mais complexa de entender até então? E a mais simples?</strong>
                        <p>{item.performit}</p>
                    </div>
                    <div className="conhecimento">
                        <strong>Compartilhe 1 conhecimento adquirido esta semana sobre mercado financeiro.</strong>
                        <p>{item.conhecimento}</p>
                    </div>
                </div>
            ))}
        </div>
        </InfoContainerStyles>
    )
}