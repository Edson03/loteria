import { Box, SimpleGrid, Center, Checkbox, Flex, Button } from "@chakra-ui/react"

const Lotofacil = () => {

    const resultado_fixar = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']
    const soma = ['184 à 199', '200 à 215', '168 à 183', '216 à 231', '152 à 167', '232 à 247', '136 à 151', '120 à 135', '264 à 270', '248 à 263']
    const linha = [43332, 44322, 44331, 53322, 54321, 44421, 33333, 54222, 53331, 44430, 54411, 54330, 54420, 55221, 55311, 55320, 55500, 55410]
    const coluna = [43332, 44322, 44331, 53322, 54321, 44421, 33333, 54222, 53331, 54330, 54411, 55221, 54420, 44430, 55320, 55311, 55500, 55410]
    const par_impar = ['7 8', '8 7', '6 9', '9 6', '5 10', '10 5', '4 11', '11 4', '3 12', '2 13', '12 3']
    const repetido = ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15']
    const primo_cruz = ['01', '02', '03', '04', '05', '06', '07', '08', '09']
    const fibonacci = ['01', '02', '03', '04', '05', '06', '07']
    const xis = ['02', '03', '04', '05', '06', '07', '08', '09']

    return (

        <Flex w="100%"  mt={5} mb={5} justify="center">
            <Box
                w={{ base: "100%", md: "100%", xl: "80%" }}
                overflow="hidden"
                justify="center"
            >
                <Flex w="100%" justify="center">
                    <SimpleGrid columns={[1, 1, 2, 3]} rows="auto" spacing={5} >
                        <Box w="300px" >
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Resultado
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={5} spacing={5}>
                                    {resultado_fixar.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Fixar Números
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={5} spacing={5}>
                                    {resultado_fixar.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Soma
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={2} spacing={5}>
                                    {soma.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Linha
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={3} spacing={5}>
                                    {linha.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Coluna
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={3} spacing={5}>
                                    {coluna.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Par e Ímpar
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={3} spacing={5}>
                                    {par_impar.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Repetido
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={3} spacing={5}>
                                    {repetido.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Primo
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={3} spacing={5}>
                                    {primo_cruz.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Cruz
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={3} spacing={5}>
                                    {primo_cruz.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Fibonacci
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={3} spacing={5}>
                                    {fibonacci.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>

                        <Box w="300px">
                            <Box
                                borderTopLeftRadius="lg"
                                borderTopRightRadius="lg"
                                fontWeight="semibold"
                                as="h4"
                                bg="#76225e"
                                color="#fff"
                                lineHeight="tight"
                                isTruncated
                                pl="4"
                                pt="3"
                                pb="3"
                                h="50px"
                            >
                                Xis
                            </Box>
                            <Center 
                                border="1px"
                                borderBottomLeftRadius="lg" 
                                borderBottomRightRadius="lg"
                                borderColor="#76225e"
                                h="250px"
                            >
                                <SimpleGrid p={4} columns={3} spacing={5}>
                                    {xis.map((item, index) => (
                                        <Checkbox key={index} colorScheme="green" defaultIsChecked>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>
                    </SimpleGrid>
                </Flex>

                <Flex justify="center" mt={25} mb={5}>
                    <Button>Gerar combinações</Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Lotofacil
