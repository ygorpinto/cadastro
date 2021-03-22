import axios from "axios";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface contextModel {
    fetchOne:(e)=>void
    fetchData:()=>void
    handleSearchBar:()=>void
    handleStatus:()=>void
    info:Array<any>;
    setUser:Dispatch<SetStateAction<string>>;
    user:string;
    name:string;
    email:string;
    isSearchBar:boolean;
    status:boolean;
    infoOne:Array<any>;
    infoObj:Array<any>;
    isAllActive:boolean;
    setIsAllActive:Dispatch<SetStateAction<boolean>>;
    setIsAddActive:Dispatch<SetStateAction<boolean>>;
    isAddActive:boolean;
    handleAddUser:()=>void;
    handleShowAll:()=>void;
    setName:Dispatch<SetStateAction<string>>;
    setEmail:Dispatch<SetStateAction<string>>;
    createRegister:(e)=>void;
    isLoading:boolean;
    setIsLoading:Dispatch<SetStateAction<boolean>>;
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
    const [email,setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
   
    const handleStatus = async () => {
        setStatus(status?false:true);
        };
    const handleSearchBar = () => {
            setIsSearchBar(isSearchBar?false:true);
        };
    const handleShowAll = () => {
            setIsAllActive(isAllActive?false:true);
        };
    const handleAddUser = () => {
            setIsAddActive(isAddActive?false:true);
        };

        useEffect(()=>{
        fetchData();
        },[]);

        useEffect(()=>{
            setTimeout(()=>{
                setIsLoading(false);
            },1800)
        },[])


    const fetchData = async () => {
        const res = await axios.get('https://relatorio-ivt.herokuapp.com/api/listall')
        const data = await res.data;
        setInfo(data);
    }

    const fetchOne = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        const res = await axios.get(`https://relatorio-ivt.herokuapp.com/api/list/${user}`);
        const result = await res.data;
        setInfoOne(result);
        setInfoObj(result);
        setIsLoading(false);
    }

    const createRegister = (e) => {
        setIsLoading(true);
        e.preventDefault();
        axios.post("https://relatorio-ivt.herokuapp.com/api/add",{
            name:name,
            email:email
        });
        alert(`${name} seu registro foi salvo com sucesso!`);
        handleAddUser();
        setIsLoading(false);
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
            email,
            setName,
            setEmail,
            createRegister,
            isLoading,
            setIsLoading
        }}>
            {children}
        </Contexts.Provider>
    )
}
