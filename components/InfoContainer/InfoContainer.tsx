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
                        <p></p>
                        {item.clientes}
                    </div>
                    <div className="fundos">
                        <p></p>
                        {item.fundos}
                    </div>
                    <div className="reuniao">
                        <p></p>
                        {item.reuniao}
                    </div>
                    <div className="sistema">
                        <p></p>
                        {item.sistema}
                    </div>
                    <div className="performit">
                        <p></p>
                        {item.performit}
                    </div>
                    <div className="conhecimento">
                        <p></p>
                        {item.conhecimento}
                    </div>
                </>
            ))}

        </div>
    )
}