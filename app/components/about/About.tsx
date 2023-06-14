import { FC } from 'react';
import styles from "./About.module.scss"
import {Title} from "@/app/components/ui/title/Title";
export const About: FC = () => {
    return <section className={styles.about} id="about">
        <div className="container">
        <Title>ОБО МНЕ</Title>
        </div>
        <div className="sub-container">

        </div>
    </section>;
};