import axios from "axios"
import { useEffect, useState } from "react"

export const Container = () => {

    const [info,setInfo] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const res = await axios.get('https://relatorio-ivt.herokuapp.com/api/listall')
        const data = await res.data;
        setInfo(data);
        console.log(info);
    }

    return (
        <div>
            {info.map((item)=>(
                <>
            <div key="01">
                {item.name}
            </div>
            <div key="02">
                {item.clientes}
            </div>
            <div key="03">
                {item.fundos}
            </div>
            <div key="04">
                {item.reuniao}
            </div>
            <div key="05">
                {item.sistema}
            </div>
            <div key="06">
                {item.performit}
            </div>
            <div key="07">
                {item.conhecimento}
            </div>
            </>
            ))}
        </div>
    )
}