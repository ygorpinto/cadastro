import axios from "axios";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface contextModel {
    fetchOne:(e)=>void
    fetchData:()=>void
    handleSearchBar:()=>void
    handleStatus:()=>void
    info:Array<any>;
    setUser:Dispatch<SetStateAction<string>>;
    user:string;
    isSearchBar:boolean;
    status:boolean;
    infoOne:Array<any>;
    infoObj:infoUser;
    isAllActive:boolean;
    setIsAllActive:Dispatch<SetStateAction<boolean>>;
    setIsAddActive:Dispatch<SetStateAction<boolean>>;
    isAddActive:boolean;
    handleAddUser:()=>void;
    handleShowAll:()=>void;
    setName:Dispatch<SetStateAction<string>>;
    setTeam:Dispatch<SetStateAction<string>>;
    setClients:Dispatch<SetStateAction<string>>;
    setFounds:Dispatch<SetStateAction<string>>;
    setMeet:Dispatch<SetStateAction<string>>;
    setSystem:Dispatch<SetStateAction<string>>;
    setPerformit:Dispatch<SetStateAction<string>>;
    setKnowlodge:Dispatch<SetStateAction<string>>;
    createRegister:(e)=>void
}

interface infoUser {
    name:string;
    clientes:string;
    fundos:string;
    reuniao:string;
    sistema:string;
    performit:string;
    conhecimento:string;
}


export const Contexts = createContext({} as contextModel);

export const ContextsProvider = ({children}) => {

    const [info, setInfo] = useState([]);
    const [infoOne, setInfoOne] = useState([]);
    const [infoObj,setInfoObj] = useState([]);
    const [status, setStatus] = useState(false);
    const [isSearchBar, setIsSearchBar] = useState(false);
    const [isAllActive, setIsAllActive] = useState(false);
    const [isAddActive, setIsAddActive] = useState(false);
    const [user,setUser] = useState("");
    const [name,setName] = useState("");
    const [team,setTeam] = useState("");
    const [clients,setClients] = useState("");
    const [founds,setFounds] = useState("");
    const [meet,setMeet] = useState("");
    const [system,setSystem] = useState("");
    const [performit,setPerformit] = useState("");
    const [knowlodge, setKnowlodge] = useState("");
   
    const handleStatus = async () => {
        setStatus(status?false:true);
        }
    const handleSearchBar = () => {
            setIsSearchBar(isSearchBar?false:true);
        }
    const handleShowAll = () => {
            setIsAllActive(isAllActive?false:true);
        }
    const handleAddUser = () => {
            setIsAddActive(isAddActive?false:true);
        }

    const fetchData = async () => {
        const res = await axios.get('https://relatorio-ivt.herokuapp.com/api/listall')
        const data = await res.data;
        setInfo(data);
    }

    const fetchOne = async (e) => {
        const userResult = [];
        e.preventDefault();
        const res = await axios.get(`https://relatorio-ivt.herokuapp.com/api/list/${user}`)
        const result = await res.data;
        userResult.push(result)
        setInfoOne(userResult);
        setInfoObj(result);
    }

    const createRegister = (e) => {
        e.preventDefault();
        axios.post("https://relatorio-ivt.herokuapp.com/api/add",{
            name:name,
            clientes:clients,
            fundos:founds,
            reuniao:meet,
            sistema:system,
            performit:performit,
            conhecimento:knowlodge
        })
        alert(`${name} seu registro foi salvo com sucesso!`);
        handleAddUser();
    }

    return (
        <Contexts.Provider value={{
            fetchOne,
            fetchData,
            handleSearchBar,
            handleStatus,
            info,
            user,
            setUser,
            isSearchBar,
            status,
            infoOne,
            infoObj,
            isAllActive,
            handleShowAll,
            isAddActive,
            handleAddUser,
            name,
            team,
            clients,
            founds,
            meet,
            system,
            performit,
            knowlodge,
            setName,
            setTeam,
            setClients,
            setFounds,
            setMeet,
            setSystem,
            setPerformit,
            setKnowlodge,
            createRegister
        }}>
            {children}
        </Contexts.Provider>
    )
}
