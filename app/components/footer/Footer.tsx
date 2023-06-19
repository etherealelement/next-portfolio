import { FC } from 'react';
import styles from "./Footer.module.scss";
import {Logo} from "@/app/components/ui/logo/Logo";
import {SocialListFooter} from "@/app/components/footer/SocialList/SocialList";
import Link from "next/link";

export const Footer: FC = () => {
    return <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
            <span className={styles.footerBorder}>
            </span>

            <div className={styles.footerInner}>
                <div className={styles.footerLeft}>
                    <Logo></Logo>
                    <p className={styles.footerCopy}>© 2010-2021 <br/>«Vitaly»</p>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.footerRightTop}>
                        <p className={styles.footerRightTopText}>Поделитесь сайтом с друзьями:</p>
                       <SocialListFooter></SocialListFooter>
                    </div>
                    <div className={styles.footerRightBottom}>
                        <ul className={styles.footerList}>
                            <li className={styles.footerListItem}>
                                <Link href="/cookie-policy" legacyBehavior>
                                    <a className={styles.footerListItemLink}>
                                        Политика использования файлов cookie
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.footerListItem}>
                                <Link href="/privat-policy" legacyBehavior>
                                    <a className={styles.footerListItemLink}>
                                        Политика конфиденциальности
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.footerListItem}>
                                <Link href="/privat-policy" legacyBehavior>
                                    <a className={styles.footerListItemLink}>
                                        Политика использования файлов cookie
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.footerListItem}>
                                <Link href="/personal-policy" legacyBehavior>
                                    <a className={styles.footerListItemLink}>
                                        Согласие на обработку персональных данных клиентов - физических лиц
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};