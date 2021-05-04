//import '../styles/globals.css'
import { ChakraProvider , extendTheme} from "@chakra-ui/react"

const myNewTheme = extendTheme({
  colors: {
    "purple.100": "#76225e"
  }
})

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider resetCSS theme={myNewTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
