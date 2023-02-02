import {Input as NativeInput, IInputProps, Icon, Pressable, Button} from "native-base";


import {MaterialIcons} from "@expo/vector-icons";


type InputProps = IInputProps & {
    show?: boolean;
    icon?: boolean
    handleShowPassword?: () => void;

}
export function Input({handleShowPassword, icon = false,show = true,...rest}: InputProps){
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
            InputRightElement={icon 
                ?<Button 
                onPress={handleShowPassword} 
                h={8} 
                w={8}
                mr={2}
                bg="gray.100"
                _pressed={{
                    bg: "gray.300"
                }}
                >
                <Icon as={MaterialIcons}  size={8}  name={show ? "visibility" : "visibility-off"}/>
                </Button> 
                : 
                undefined}
            placeholderTextColor="gray.400"
            color="gray.600"
            {...rest}
        />
    );
}