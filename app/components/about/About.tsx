import { FC } from 'react';
import styles from "./About.module.scss"
import {Title} from "@/app/components/ui/title/Title";
import Image from "next/image";
export const About: FC = () => {
    return <section className={styles.about} id="about">
        <div className="container">
        <Title>ОБО МНЕ</Title>
        </div>
        <div className={`"sub-container" ${styles.aboutSubContainer}`}>
            <Image
            src="/avatar.png"
            width={552}
            height={557}
            alt="avatar"
            className={styles.aboutSubContainerImg}
            />
            <div className={styles.aboutSubContainerInner}>
                <h3>
                    <span className={styles.aboutSubContainerInnerBorder}>
                        <span className={styles.aboutSubContainerInnerBorderArrow}></span>
                        <span className={styles.aboutSubContainerInnerBorderLine}></span>
                    </span>
                </h3>
            </div>
        </div>
    </section>;
};