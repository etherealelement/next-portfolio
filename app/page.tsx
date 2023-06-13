import {Header} from "@/app/components/header/Header";
import {Hero} from "@/app/components/hero/Hero";


export default function Home() {
    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
            </main>
            <div className="background-animation">
                <div id="ball-one"></div>
                <div id="ball-two"></div>
                <div id="ball-three"></div>
            </div>
        </>
    )
}
