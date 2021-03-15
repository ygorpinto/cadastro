import axios from "axios";
import { useEffect, useState } from "react"

export const InfoContainer = () => {

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
        <div>
            {data.map(item => (
                <>
                    <div className="clientes">
                        <p>Quais clientes você pode ter contato ao longo da semana?</p>
                        {item.clientes}
                    </div>
                    <div className="fundos">
                        <p>Quais tipos de fundo você teve contato esta semana?</p>
                        {item.fundos}
                    </div>
                    <div className="reuniao">
                        <p>Participou de alguma reunião com cliente? Qual era o problema que estava sendo resolvido? Qual a causa raiz do problema (erro nosso ou erro de quem está usandoa plataforma)? alguma solução foi alcançada?</p>
                        {item.reuniao}
                    </div>
                    <div className="sistema">
                        <p>Você utilizou o sistema esta semana? Qual tela? Qual o objetivo do que você fez?</p>
                        {item.sistema}
                    </div>
                    <div className="performit">
                        <p>Qual sua 1ª impressão com o PerformIt? Na sua opinião qual foi a parte do sistema mais complexa de entender até então? E a mais simples?</p>
                        {item.performit}
                    </div>
                    <div className="conhecimento">
                        <p>Compartilhe 1 conhecimento adquirido esta semana sobre mercado financeiro.</p>
                        {item.conhecimento}
                    </div>
                </>
            ))}
        </div>
    )
}