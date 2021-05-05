import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex 
            as="footer"
            bg="#02689D"
            p={5}
            h="80px"
            color="#fff"
            align="center"
            justify="center"
            position="relative"
            bottom="0"
            w="100%"
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
