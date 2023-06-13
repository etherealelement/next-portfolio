"use client"
import {FC, MutableRefObject, useEffect} from 'react';
import styles from "./Hero.module.scss"
import {Button} from "@/app/components/ui/button/Button";
import Link from "next/link";
import {useMediaQuery} from "@/app/hooks";
import  gsap from "gsap";
import {useRef} from "react";
import {HeroArrow} from "@/app/components/hero/images/HeroArrow";

export const Hero: FC = ():JSX.Element => {
    const isMobile = useMediaQuery(800);
    const isMobile485 = useMediaQuery(485);
    const heroTitle = useRef() as MutableRefObject<HTMLHeadingElement>


    useEffect(()=>{
        const colors = gsap.to(heroTitle.current, {
            paused: true,
            duration: 20,
            repeat: -1,
            '--hue': 360,
        })

        const doRandom = () => {
            gsap.timeline()
                .to(heroTitle, {
                    duration: 0.1,
                    opacity: function(){ return gsap.utils.random(.90, .95) },
                    delay: function(){ return gsap.utils.random(.1, 2) },
                }).to(heroTitle, {
                duration: 0.1,
                opacity: 1,
                onComplete: function(){
                    doRandom()
                }
            })
        }

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (! mediaQuery || ! mediaQuery.matches) {
            colors.play();
            doRandom();
        }
    }, [])

    return <>
        <section className={styles.hero}
        style={{backgroundImage: isMobile485 ? '' : `url("/hero-bg${isMobile ? "-mobile" : ""}.png")`}}
        >
            <div className="sub-container">
                <div className={styles.heroInner}></div>
                <h1
                    ref={heroTitle}
                    className={styles.heroInnerTitle}>Web development</h1>
                <p className={styles.heroInnerDescr}>Вы работаете над чем-то великим?<br/>Я с удовольствием помогу вам в этом!<br/>Напишите мне письмо и мы начнем проект<br/> прямо сейчас!</p>
                <Link
                href="contact"
                className={styles.heroInnerBtn}
                >
                 <Button className={styles.heroInnerBtnButton}>Связаться с разработчиком</Button>
                </Link>


                {isMobile && <Link
                    href="contact"
                    className={styles.heroInnerArrow}
                >
                    <HeroArrow></HeroArrow>
                </Link>}
            </div>
        </section>
    </>
};