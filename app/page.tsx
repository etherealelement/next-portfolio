import {Header} from "@/app/components/header/Header";


export default function Home() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="background-animation">
                    <div id="ball-one"></div>
                    <div id="ball-two"></div>
                    <div id="ball-three"></div>
                </div>
            </main>
        </>
    )
}
