import { useContext, useEffect} from "react"
import { Contexts } from "../../contexts/Contexts"
import { ContainerStyles } from '../Container/ContainerStyles'
import { InfoContainer } from "../InfoContainer/InfoContainer"

export const Container = () => {

    const {handleStatus,fetchData,info,status} = useContext(Contexts);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>  
            {status && <InfoContainer/>}
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