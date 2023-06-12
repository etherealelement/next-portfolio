import './globals.css'
import {Lato} from 'next/font/google'
import {NextFont} from "next/dist/compiled/@next/font";
import "./utils/helpers/reset.scss";

const lato: NextFont = Lato({
    subsets: ['latin'],
    weight: "400",
})




export const metadata = {
    icons: {
        icon: '/favicon.ico',
    },
    title: 'Portfolio',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={lato.className}>
        <div className="container">
            {children}
        </div>
        </body>
        </html>
    )
}
