import { useContext, useEffect } from "react"
import { Contexts } from "../../contexts/Contexts"
import { AddData } from "../AddData/AddData"
import { ContainerStyles } from '../Container/ContainerStyles'
import { InfoContainer } from "../InfoContainer/InfoContainer"

export const Container = () => {

    const { handleStatus, fetchData, info, status, infoOne, isAllActive, isAddActive } = useContext(Contexts);

    useEffect(() => {
        fetchData();
    }, [])

    if (isAllActive) {
        return (
            <div>
            {isAddActive && <AddData/>}
                {status && <InfoContainer />}
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
            </div>
        )
    }

    return (
        <>
        {isAddActive && <AddData/>}   
            {status && <InfoContainer />}
            <ContainerStyles>
                <div className="mainData">
                    {infoOne.map((item) => (
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