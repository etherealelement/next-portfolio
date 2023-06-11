import Image from 'next/image'
import {Button} from "@/app/components/ui/button/Button";
import {Logo} from "@/app/components/ui/logo/Logo";

export default function Home() {
    return (
        <main>
            <h1>Hello</h1>
            <Button>{"Связаться с разработчиком"}</Button>
            <Logo></Logo>
            <div className="background-animation">
                <div id="ball-one"></div>
                <div id="ball-two"></div>
                <div id="ball-three"></div>
            </div>
        </main>
    )
}
