import { useContext, useEffect } from "react";
import { Container } from "../components/Container/Container";
import { Header } from "../components/Header/Header";
import { Contexts, ContextsProvider } from '../contexts/Contexts'

export default function Home() {

  const {isLoading,setIsLoading} = useContext(Contexts);


  return (
    <div>
      <ContextsProvider>
      <Header/>
      <Container/>
      </ContextsProvider>
    </div>
  )
}
