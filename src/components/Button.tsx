import {Button as NativeBaseButton, Text} from "native-base";

export function Button(){
    return(
        <NativeBaseButton
        mt={8}
        w="full"
        h={14}
        variant="solid"
        bg="blue.500"
        _pressed={{
            bg: "blue.700"
        }}
        >
            <Text
                color="gray.100"
                fontFamily="heading"
                fontSize="sm"
            >
                Entrar
            </Text>
        </NativeBaseButton>
    );
}