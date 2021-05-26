import { useState} from 'react'
import { Box, SimpleGrid, Center, CheckboxGroup, Checkbox, Flex, Button, Textarea } from "@chakra-ui/react"


let array_resultado = []
let array_fixarNumeros = []
let array_soma = []
let array_linha = []
let array_coluna = []
let array_par = []
let array_repetido = []
let array_primo = []
let array_fibonacci = []
let array_cruz = []
let array_xis = []

const onResultadoChange = (e) => {
    let value = e.target.value
    if (array_resultado.includes(value) && !e.target.checked) {
        array_resultado.splice( array_resultado.indexOf(value), 1 );
    } else if (!array_resultado.includes(value) && e.target.checked) {
        array_resultado.push(value)
    }
}

const onFixarNumerosChange = (e) => {
    let value = e.target.value
    if (array_fixarNumeros.includes(value) && !e.target.checked) {
        array_fixarNumeros.splice( array_fixarNumeros.indexOf(value), 1 );
    } else if (!array_fixarNumeros.includes(value) && e.target.checked) {
        array_fixarNumeros.push(value)
    }
}

const onSomaChange = (e) => {
    let value = e.target.value
    if (array_soma.includes(value) && !e.target.checked) {
        array_soma.splice( array_soma.indexOf(value), 1 );
    } else if (!array_soma.includes(value) && e.target.checked) {
        array_soma.push(value)
    }
}

const onLinhaChange = (e) => {
    let value = e.target.value
    if (array_linha.includes(value) && !e.target.checked) {
        array_linha.splice( array_linha.indexOf(value), 1 );
    } else if (!array_linha.includes(value) && e.target.checked) {
        array_linha.push(value)
    }
}

const onColunaChange = (e) => {
    let value = e.target.value
    if (array_coluna.includes(value) && !e.target.checked) {
        array_coluna.splice( array_coluna.indexOf(value), 1 );
    } else if (!array_coluna.includes(value) && e.target.checked) {
        array_coluna.push(value)
    }
}

const onParImparChange = (e) => {
    let value = e.target.value
    if (array_par.includes(value) && !e.target.checked) {
        array_par.splice( array_par.indexOf(value), 1 );
    } else if (!array_par.includes(value) && e.target.checked) {
        array_par.push(value)
    }
}

const onRepetidoChange = (e) => {
    let value = e.target.value
    if (array_repetido.includes(value) && !e.target.checked) {
        array_repetido.splice( array_repetido.indexOf(value), 1 );
    } else if (!array_repetido.includes(value) && e.target.checked) {
        array_repetido.push(value)
    }
}

const onPrimoChange = (e) => {
    let value = e.target.value
    if (array_primo.includes(value) && !e.target.checked) {
        array_primo.splice( array_primo.indexOf(value), 1 );
    } else if (!array_primo.includes(value) && e.target.checked) {
        array_primo.push(value)
    }
}

const onFibonacciChange = (e) => {
    let value = e.target.value
    if (array_fibonacci.includes(value) && !e.target.checked) {
        array_fibonacci.splice( array_fibonacci.indexOf(value), 1 );
    } else if (!array_fibonacci.includes(value) && e.target.checked) {
        array_fibonacci.push(value)
    }
}

const onCruzChange = (e) => {
    let value = e.target.value
    if (array_cruz.includes(value) && !e.target.checked) {
        array_cruz.splice( array_cruz.indexOf(value), 1 );
    } else if (!array_cruz.includes(value) && e.target.checked) {
        array_cruz.push(value)
    }
}

const onXisChange = (e) => {
    let value = e.target.value
    if (array_xis.includes(value) && !e.target.checked) {
        array_xis.splice( array_xis.indexOf(value), 1 );
    } else if (!array_xis.includes(value) && e.target.checked) {
        array_xis.push(value)
    }
}

const sendData = () => {
    console.log(array_resultado)
    console.log(array_fixarNumeros)
    console.log(array_soma)
    console.log(array_linha)
    console.log(array_coluna)
    console.log(array_par)
    console.log(array_repetido)
    console.log(array_primo)
    console.log(array_fibonacci)
    console.log(array_cruz)
    console.log(array_xis)
}

const Lotofacil = (object) => {

    const [resultado_fixar,soma,linha,coluna,par_impar,repetido,primo_cruz,fibonacci,xis] = object.data
    
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
                                    <CheckboxGroup colorScheme="purple" >
                                    {resultado_fixar.map((item, index) => (
                                        <Checkbox key={index} name="resultado" value={item} onChange={(e)=>onResultadoChange(e)}>
                                            {item}
                                        </Checkbox>
                                    ))}
                                    </CheckboxGroup>
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
                                        <Checkbox key={index} colorScheme="green" name="fixarNumeros" value={item} onChange={(e)=>onFixarNumerosChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="soma" value={item} onChange={(e)=>onSomaChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="linha" value={item} onChange={(e)=>onLinhaChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="coluna" value={item} onChange={(e)=>onColunaChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="par" value={item} onChange={(e)=>onParImparChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="repetido" value={item} onChange={(e)=>onRepetidoChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="primo" value={item} onChange={(e)=>onPrimoChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="cruz" value={item} onChange={(e)=>onCruzChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="fibonacci" value={item} onChange={(e)=>onFibonacciChange(e)}>
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
                                        <Checkbox key={index} colorScheme="green" name="xis" value={item} onChange={(e)=>onXisChange(e)}>
                                            {item}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </Center>
                        </Box>
                    </SimpleGrid>
                </Flex>

                <Flex justify="center" mt={25} mb={5}>
                    <Button onClick={sendData}> Gerar combinações</Button>
                </Flex>  

                <Flex justify="center">
                    <Box w="950px" h={200} border="1px" borderColor="#76225e">

                    </Box>
                </Flex>

            </Box>                      
        </Flex>  
    )
}

export default Lotofacil
