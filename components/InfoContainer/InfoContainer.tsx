import axios from "axios";
import { useEffect, useState } from "react"
import { InfoContainerStyles } from "./InfoContainerStyles";

export const InfoContainer = ({func}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        bringData();
    }, [])

    const bringData = async () => {
        const res = await axios.get('https://relatorio-ivt.herokuapp.com/api/listall')
        const itens = await res.data;
        setData(itens)
    }

    return (
        <InfoContainerStyles>
        <div className="info">
            <button onClick={func}><img src="cancel.svg"/></button>
            {data.map(item => (
                <>
                    <div className="clientes">
                        <p>Quais clientes você pode ter contato ao longo da semana?</p>
                        <p>{item.clientes}</p>
                    </div>
                    <div className="fundos">
                        <p>Quais tipos de fundo você teve contato esta semana?</p>
                        <p>{item.fundos}</p> 
                    </div>
                    <div className="reuniao">
                        <p>Participou de alguma reunião com cliente? Qual era o problema que estava sendo resolvido? Qual a causa raiz do problema (erro nosso ou erro de quem está usandoa plataforma)? alguma solução foi alcançada?</p>
                        <p>{item.reuniao}</p>
                    </div>
                    <div className="sistema">
                        <p>Você utilizou o sistema esta semana? Qual tela? Qual o objetivo do que você fez?</p>
                        <p>{item.sistema}</p> 
                    </div>
                    <div className="performit">
                        <p>Qual sua 1ª impressão com o PerformIt? Na sua opinião qual foi a parte do sistema mais complexa de entender até então? E a mais simples?</p>
                        <p>{item.performit}</p>
                    </div>
                    <div className="conhecimento">
                        <p>Compartilhe 1 conhecimento adquirido esta semana sobre mercado financeiro.</p>
                        <p>{item.conhecimento}</p>
                    </div>
                </>
            ))}
        </div>
        </InfoContainerStyles>
    )
}