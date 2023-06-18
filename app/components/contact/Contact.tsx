import { FC } from 'react';
import {Title} from "@/app/components/ui/title/Title";
import styles from "./Contact.module.scss";
import {Arrow} from "@/app/components/ui/arrow/Arrow";
import {SocialList} from "@/app/components/contact/SocialList/SocialList";
export const Contact: FC = () => {
    return <section id="contact" className={styles.contact}>
            <div className="container">
                <Title>ОБРАТНАЯ СВЯЗЬ</Title>
            </div>
        <div className="sub-container">
            <div className={styles.contactInner}>
                <div className={styles.contactInnerLeft}>
                    <p className={styles.contactInnerLeftText}>
                        Вы работаете над чем-то великим?<br/>Я с удовольствием помогу вам в этом!<br/>Напишите мне письмо и мы начнем проект прямо сейчас!<br/>Просто сделай это)
                    </p>
                    <h3 className={styles.contactInnerLeftTitle}>
                        <span className={styles.contactInnerLeftTitleText}>Я в соцсетях:</span>
                        <span className={styles.contactInnerLeftTitleIcon}><Arrow/></span>
                        <span className={styles.contactInnerLeftTitleBorder}></span>
                    </h3>
                    <SocialList></SocialList>
                </div>
                <div className={styles.contactInnerRight}></div>
            </div>
        </div>
    </section>;
};