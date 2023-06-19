"use client"
import {MainPage} from "@/app/mainPage";
import {Preloader} from "@/app/components/preloader/Preloader";
import {useState} from "react";


export default function Home() {
    const [preloader, setPreloader] = useState(false)

    // window.addEventListener("load", ()=> {
    //     setPreloader(!preloader)
    // })

    return (
        <>
            {!preloader ? <MainPage></MainPage> : <Preloader></Preloader>}
        </>
    )
}
