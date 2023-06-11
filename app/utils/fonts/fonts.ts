import {Raleway, Montserrat, Lato} from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";

export const raleway:NextFont = Raleway({
    weight: ["400", "500", "700", "900"],
    subsets: ['latin']
})

export const montserrat:NextFont = Montserrat({
    weight: ["400", "100", "500"],
    subsets: ["latin"]
})

export const lato:NextFont = Lato({
    weight: ["400"],
    subsets: ["latin"]
})