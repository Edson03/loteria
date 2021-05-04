import Link from 'next/link'
import { useState } from 'react'
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
 
 
const MenuItems = ({ children, isLast, to = '/' }) => {
  //console.log(children)
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};
 
const Header = (props) => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)
 
  return (
    <Flex w="100%" bg="#02689D" justify="center">
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w={{base: "100%", md: "100%", xl: "80%"}}
      h="80px"
      pl={10}
      pr={10}
      bg="#02689D"//{["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Box w="200px">
        <Text fontSize="lg" fontWeight="bold">
          Aposta Esperta
        </Text>
      </Box>
 
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
 
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        h={show ? "100vh" : "auto"}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Lotofácil</MenuItems>
          <MenuItems to="/como-funciona">Como funciona</MenuItems>
          {/*<MenuItems to="/conferir" isLast>Conferir jogos</MenuItems>*/}  
        </Flex>
      </Box>
    </Flex>
    </Flex>
  )
}
 
export default Header