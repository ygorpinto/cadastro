import { useContext } from "react";
import { Container } from "../components/Container/Container";
import { Header } from "../components/Header/Header";
import { Loading } from "../components/Loading/Loading";
import { Contexts, ContextsProvider } from "../contexts/Contexts";


export default function Home() {

  const {isLoading} = useContext(Contexts);

  return (
    <div>
      {isLoading ? <Loading/> : (
        <ContextsProvider>
        <Header/>
        <Container/>
        </ContextsProvider>
      )}
    </div>
  )
}
