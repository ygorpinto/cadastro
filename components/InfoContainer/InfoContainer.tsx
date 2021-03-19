import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { InfoContainerStyles } from "./InfoContainerStyles";

export const InfoContainer = () => {

    const {handleStatus,infoObj} = useContext(Contexts);

    return (
        <InfoContainerStyles>
        <div className="info">
            <button onClick={handleStatus}><img src="cancel.svg"/></button>
                <div className="itens">
                    <div className="email">
                        <strong>Email do usuário :</strong>
                        <p>{infoObj.email}</p>
                    </div>
                </div>
        </div>
        </InfoContainerStyles>
    )
}