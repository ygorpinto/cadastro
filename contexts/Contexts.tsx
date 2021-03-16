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
    const [user,setUser] = useState('');
   
    const handleStatus = async () => {
        setStatus(status?false:true);
    }

    const handleSearchBar = () => {
            setIsSearchBar(isSearchBar?false:true);
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
            infoObj
        }}>
            {children}
        </Contexts.Provider>
    )
}
