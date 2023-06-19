"use client"
import {Header} from "@/app/components/header/Header";
import {Hero} from "@/app/components/hero/Hero";
import {About} from "@/app/components/about/About";
import {Skills} from "@/app/components/skills/Skills";
import {Portfolio} from "@/app/components/portfolio/Portfolio";
import {Contact} from "@/app/components/contact/Contact";
import {Preloader} from "@/app/components/preloader/Preloader";
import {FC, useState} from "react";


export const MainPage: FC = (): JSX.Element => {
    return <>
        <Header></Header>
        <main>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </main>
        <div className="background-animation">
            <div id="ball-one"></div>
            <div id="ball-two"></div>
            <div id="ball-three"></div>
        </div>
    </>
}