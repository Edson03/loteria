import { CalendarIcon } from '@chakra-ui/icons'
import { Flex, Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import Layout from '../components/Layout'

const ComoFunciona = () => {
    return (
        <Layout>
            <Flex w="100%" minH="calc(100vh - 200px)" mt={5} mb={5} justify="center">
                <Box
                    w={{ base: "100%", md: "100%", xl: "80%" }}
                    overflow="hidden"
                    justify="center"
                >
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        O que é e para que serve?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                A Aposta Esperta é uma aplicação que possui na sua base de dados todas as combinações possíveis de algumas loterias. 
                                A qual visa a partir desses dados estatísticos das combinações, contribuir para que você possa escolher os seus 
                                palpites de forma mais inteligente e com maiores chances de acertar os tão sonhados números das loterias.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Como funciona?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Você deve escolher dentre os filtros disponíveis os que você quer utilizar, a partir das suas análises e estudos de sorteios anteriores.
                                Os resultados dos últimos sorteios nos dão algumas informações importantes a respeito de como escolher os futuros números.
                                Por exemplo, na Lotofácil o total de números repetidos do concurso anterior costuma estar entre 7 e 11. Portanto é possível 
                                analisar qual a quantidade provável de números repetidos que podem vir no próximo concurso.
                                E assim pode ser feito para os demais filtros, sendo que estes permitem que se escolha mais de uma opção.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Onde obter dados estatísticos dessas loterias?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Muitos sites disponibilizam gratuitamente esses dados, outros parcialmente. 
                                E cobram por dados mais completos.Um desses site que disponibilizam as estatísticas é o 
                                xloterias.com.br (Sendo que não conheço e nem sei quem é o dono do site, apenas estou indicando, por ser um dos que utilizo).
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        É 100% garantido que vou acertar?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Meu caro usuário(a) tenha em mente que não se pode afirmar que esse ou aquele método tem 100% de garantia. 
                                Se assim fosse muitos já estariam milionários, embora estatisticamente algumas combinações tenham poucas chances de sair, 
                                ainda assim elas podem sair. Então se suas análises indicam que a quantidade de 11 números repetidos da lotofácil já faz 
                                muito tempo que não saem, e estatísticamente a média é que sai a cada 3 ou quatro concurso, não quer dizer que vai sair 
                                no próximo concurso, as chances são maiores, mas tal afirmação não pode ser feita.
                                Portanto, antes de gerar todas as combinações com os 11 números do concurso anterior e sair correndo apostar, 
                                pense bem e jogue de forma consciente. Esse projeto foi justamente para poder ajudar aqueles que gostam 
                                de analisar e apostar nas loterias de forma mais "inteligente", usando a matemática a vosso favor para 
                                melhorar e começar a ganhar e não para perder tudo.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Qual o diferencial dessa aplicação?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                O sistema possui todas as combinações de cada loteria. 
                                Por exemplo na lotofácil são 3.268.760 combinações possíveis. 
                                Então se você escolher corretamente os filtros, a aposta vencedora estará entre elas.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
        </Layout>
    )
}

export default ComoFunciona