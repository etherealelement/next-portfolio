"use client"
import {Header} from "@/app/components/header/Header";
import {FC} from "react";
import Layouts from "@/app/layouts/Layouts";
import {PolicyContent} from "@/app/components/policy/PolicyContent";


const PersonalPolicy: FC = (): JSX.Element => {
    return <>
        <Header></Header>
        <Layouts>
            <main>
                <PolicyContent></PolicyContent>
            </main>
        </Layouts>
        <div className="background-animation">
            <div id="ball-one"></div>
            <div id="ball-two"></div>
            <div id="ball-three"></div>
        </div>
    </>
}

export default PersonalPolicy