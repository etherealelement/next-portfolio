import {FC} from 'react';
import styles from "./About.module.scss"
import {Title} from "@/app/components/ui/title/Title";
import Image from "next/image";
import {Arrow} from "@/app/components/ui/arrow/Arrow";
import {SocialList} from "@/app/components/about/SocialList";
import "../../globals.css"

export const About: FC = () => {
    return <section className={styles.about} id="about">
        <div className="container">
            <Title>ОБО МНЕ</Title>
        </div>
        <div className={`sub-container ${styles.aboutSubContainer}`}>
            <Image
                src="/avatar.png"
                width={552}
                height={557}
                alt="avatar"
                className={styles.aboutSubContainerImg}
            />
            <div className={styles.aboutSubContainerInner}>
                <h3 className={styles.aboutSubContainerInnerTitle}>
                    Vitaly Safonov
                    <span className={styles.aboutSubContainerInnerBorder}>
                        <span className={styles.aboutSubContainerInnerBorderArrow}>
                            <Arrow></Arrow>
                        </span>
                        <span className={styles.aboutSubContainerInnerBorderLine}></span>
                    </span>
                </h3>
                <p className={styles.aboutSubContainerInnerDescr}>
                    Расположенный в Хартфорде, штат Коннектикут.<br/>
                    В настоящее время я работаю по совместительству<br/> Удаленным младшим веб-разработчиком для Coolor,<br/>
                    расположенного в Лас-Вегасе.<br/>
                    Я ищу, чтобы взять на себя больше работы и повысить<br/> свои навыки в качестве веб-разработчика.
                </p>

                <SocialList></SocialList>
            </div>
        </div>
    </section>;
};