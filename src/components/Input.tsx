import {Input as NativeInput} from "native-base";


export function Input(){
    return(
        <NativeInput 
            variant="outline"
            h={14}
            px={4}
            bg="gray.100"
            fontSize="md"
            mb={4}
            fontFamily="body"
            _focus={{
                borderColor: "gray.500",
                borderWidth: 1,
                bg: "gray.100"
            }}
            placeholderTextColor="gray.400"
            color="gray.600"
        />
    );
}