import { Container } from "../components/Container/Container";
import { Header } from "../components/Header/Header";
import { ContextsProvider } from '../contexts/Contexts'

export default function Home() {
  return (
    <div>
      <ContextsProvider>
      <Header/>
      <Container/>
      </ContextsProvider>
    </div>
  )
}
