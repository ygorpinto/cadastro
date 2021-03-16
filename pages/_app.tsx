import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
margin:0;
padding:0;
box-sizing:border-box;
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )}

export default MyApp
