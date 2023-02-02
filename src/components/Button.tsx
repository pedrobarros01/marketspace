import {Button as NativeBaseButton, Text, IButtonProps, useTheme} from "native-base";
import {Plus, WhatsappLogo, Tag, Power, TrashSimple} from "phosphor-react-native";


type ButtonType = 'PRIMARY' | 'SECONDARY' | 'TERCIARY'
type IconNameType = 'Plus' | 'WhatsappLogo' | 'Tag' | 'Power' | 'TrashSimple' | undefined
type Props = IButtonProps & {
    iconName?: IconNameType ;
    title: string;
    type?: ButtonType
}

export function Button({iconName, title, type = 'PRIMARY', ...rest}: Props){
    const theme = useTheme();
    function iconButton(){
        const colorIcon = theme.colors.gray[100];
        const size = 22;
        if(iconName === 'Plus'){
            return <Plus color={colorIcon} size={size} />;
        }
        if(iconName === 'Power'){
            return <Power color={colorIcon} size={size} />
        }
        if(iconName === 'Tag'){
            return <Tag color={colorIcon} size={size} />;
        }
        if(iconName === 'TrashSimple'){
            return <TrashSimple color={colorIcon} size={size} />;
        }
        if(iconName === 'WhatsappLogo'){
            return <WhatsappLogo color={colorIcon} size={size} />;
        }
        return undefined;
    }
    const icon = iconButton();


    return(
        <NativeBaseButton
        mt={8}
        w="full"
        h={14}
        variant="solid"
        bg={type === "PRIMARY" ? "gray.700": type === "SECONDARY" ? "blue.500" : "gray.300"}
        _pressed={{
            bg: type === "PRIMARY" ? "gray.500": type === "SECONDARY" ? "blue.700" : "gray.200"
        }}
        leftIcon={icon}
        {...rest}
        >
            <Text
                color={type === "TERCIARY" ? "gray.600" : "gray.100"}
                fontFamily="heading"
                fontSize="sm"
            >
                {title}
            </Text>
        </NativeBaseButton>
    );
}