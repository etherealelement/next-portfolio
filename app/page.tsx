"use client"
import {MainPage} from "@/app/mainPage/MainPage";
import {Preloader} from "@/app/components/preloader/Preloader";
import {useEffect, useState} from "react";

export default function Home() {
    const [preloader, setPreloader] = useState(false)

   useEffect(()=>{
       document.addEventListener("DOMContentLoaded", ()=> {
           setPreloader(!preloader)
       })
   }, [])

    return (
        <>
            {!preloader ? <MainPage></MainPage> : <Preloader></Preloader>}
        </>
    )
}
