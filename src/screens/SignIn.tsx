import { Center, Heading, VStack, Text,Image,  } from "native-base";
import { useState } from "react";
import {ScrollView} from "react-native";

import LogoIMG from "@assets/logo.png";
import HeadingIMG from "@assets/marketspaceHeading.png";


import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignIn(){
    const [show, setShow] = useState(false);
    function handleShowPassword(){
        setShow(!show);
    }
    return(
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
            >
                <VStack
                    flex={1}
                    bg="gray.100"
                >
                    <VStack
                    bg="gray.200"
                    py={12}
                    px={10}
                    pb={24}
                    borderBottomLeftRadius={24}
                    borderBottomRightRadius={24}
                    >
                        <Center mb={16}>
                            <Image 
                                source={LogoIMG}
                                alt="Logo Marketspace"
                                h={16}
                                w={24}
                                mb={4}
                            />
                            <Heading
                                fontSize="2xl"
                            >
                                marketspace
                            </Heading>
                            <Text
                            fontSize="sm"
                            color="gray.500"
                            >
                                Seu espaço de compra e venda
                            </Text>
                        </Center>
                        <Center>
                            <Text
                            color="gray.600"
                            fontSize="sm"
                            mb={6}
                            >
                                Acesse sua conta
                            </Text>
                            <Input 
                            type="text"
                            placeholder="E-mail" 
                            
                            />
                            <Input 
                            type={show ? "text" : "password"} 
                            icon 
                            handleShowPassword={handleShowPassword} 
                            show={show}
                            placeholder="Senha"
                            />
                            <Button 
                            title="Entrar" 
                            type="SECONDARY"
                            />
                        </Center>
                    </VStack>
                    <VStack
                        bg="gray.100"
                        h={56}
                    >
                        <Center
                        p={6}
                        >
                                <Text
                                    color="gray.600"
                                    fontSize="sm"
                                >
                                    Ainda não tem acesso?
                                </Text>
                                <Button 
                                title="Criar uma conta"  
                                type="TERCIARY"
                                
                                />
                            
                        </Center>
                    </VStack>
                    
                </VStack>
            </ScrollView>
        
    );
}