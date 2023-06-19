import { FC } from 'react';
import Image from "next/image";
import styles from "./Preloader.module.scss"

export const Preloader: FC = () => {
    return <div className={styles.preloader}>
        <div className={styles.preloaderBlock}>
            <div className={styles.preloaderBlockInner}>
                <Image
                    src="/logo.svg"
                    width={85}
                    height={40}
                    alt="logo"
                ></Image>
                <h1>Web development</h1>
            </div>
            <div className={styles.loadingIoSpinnerRolling}>
                <div className={styles.loading}>
                    <div></div>
                </div>
            </div>
        </div>
        <div className="background-animation">
            <div id="ball-one"></div>
            <div id="ball-two"></div>
            <div id="ball-three"></div>
        </div>
    </div>;
};