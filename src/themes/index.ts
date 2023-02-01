import { extendTheme } from "native-base";
export const THEME = extendTheme({
    colors: {
        gray:{
            700: "#1A181B",
            600: "#3E3A40",
            500: "#5F5B62",
            400: "#9F9BA1",
            300: "#D9D8DA",
            200: "#EDECEE",
            100: "#F7F7F8"
        },
        blue: {
            700: "#364D9D",
            500: "#647AC7"
        },
        red: {
            500: "#EE7979"
        }
    },
    fonts: {
        heading: "Karla_700Bold",
        body: "Karla_400Regular"
    },
    sizes:{
        14: 56,
        33: 148,
        100: 400,
        120: 480,
        140: 560,
        150: 600,
        160: 640
    }
})