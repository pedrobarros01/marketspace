import { Center, Heading, VStack, Text,Image,  } from "native-base";
import {ScrollView} from "react-native";

import LogoIMG from "@assets/logo.png";
import HeadingIMG from "@assets/marketspaceHeading.png";


import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignIn(){
    return(
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
            >
                <VStack
                    flex={1}
                    bg="gray.200"
                >
                    <VStack
                    bg="gray.200"
                    py={12}
                    px={10}
                    pb={24}


                    
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
                            <Input />
                            <Input />
                            <Button />
                        </Center>
                    </VStack>
                    <VStack
                    bg="gray.100"
                    h={56}
                    >

                    </VStack>
                    
                </VStack>
            </ScrollView>
        
    );
}