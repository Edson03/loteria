import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex 
            as="footer"
            bg="#02689D"
            p={5}
            color="#fff"
            align="center"
            justify="center"
            position="static"
            bottom={0}
        >
            <Flex direction="column" align="center">
                <Text fontSize="lg" fontWeight="bold">
                    Contato:
                </Text>
                <Text fontSize="md">
                    apostaesperta.com.br@gmail.com
                </Text>
            </Flex>
        </Flex>
    )
}

export default Footer
