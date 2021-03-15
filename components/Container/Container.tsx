import axios from "axios"
import { useEffect, useState } from "react"

import { ContainerStyles } from '../Container/ContainerStyles'

export const Container = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await axios.get('https://relatorio-ivt.herokuapp.com/api/listall')
        const data = await res.data;
        setInfo(data);
    }

    return (
        <ContainerStyles>
            <div className="mainData">
                {info.map((item) => (
                    <>
                        <div className="name">
                            <p>{item.name}</p>
                        </div>
                    </>
                ))}
            </div>
        </ContainerStyles>
    )
}