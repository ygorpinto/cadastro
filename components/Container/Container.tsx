import axios from "axios"
import { useEffect, useState } from "react"

import { ContainerStyles } from '../Container/ContainerStyles'
import { InfoContainer } from "../InfoContainer/InfoContainer";
import { SearchBar } from "../SearchBar/SearchBar";

export const Container = () => {

    const [info, setInfo] = useState([]);
    const [status, setStatus] = useState(false);
   

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await axios.get('https://relatorio-ivt.herokuapp.com/api/listall')
        const data = await res.data;
        setInfo(data);
    }

    const handleStatus = () => {
        setStatus(status?false:true);
    }

    return (
        <>  
            {status && <InfoContainer func={handleStatus}/>}
        <ContainerStyles>
            <div className="mainData">
                {info.map((item) => (
                    <>
                        <div onClick={handleStatus} className="name">
                            <p>{item.name}</p>
                        </div>
                    </>
                ))}
            </div>
        </ContainerStyles>
        </>
    )
}