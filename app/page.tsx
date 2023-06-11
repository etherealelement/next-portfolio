import Image from 'next/image'
import {Button} from "@/app/components/ui/button/Button";

export default function Home() {
    return (
        <main>
            <h1>Hello</h1>
            <Button>{"Связаться с разработчиком"}</Button>
            <div className="background-animation">
                <div id="ball-one"></div>
                <div id="ball-two"></div>
                <div id="ball-three"></div>
            </div>
        </main>
    )
}
