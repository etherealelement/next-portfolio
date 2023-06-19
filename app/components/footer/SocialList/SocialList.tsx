import { FC } from 'react';
import styles from "./SocialList.module.scss";
import Image from "next/image";

export const SocialListFooter: FC = () => {
    return <>
        <ul className={styles.socialList}>
            <li className={styles.socialListItem}>
                <a href="#" className={styles.socialListItemLink}>
                    <span className={styles.socialListItemLinkSpn}>facebook</span>
                    <span className={`${styles.socialListItemLinkIcon} ${styles.socialListItemLinkIconFb}`}>
                       <Image
                           src="/facebook-logo.svg"
                           width={14}
                           height={28}
                           alt="facebook-logo"
                           className={styles.socialListItemLinkIconImg}
                       ></Image>
                   </span>
                </a>
            </li>
            <li className={styles.socialListItem}>
                <a href="#" className={styles.socialListItemLink}>
                    <span className={styles.socialListItemLinkSpn}>ВКонтакте</span>
                    <span className={`${styles.socialListItemLinkIcon} ${styles.socialListItemLinkIconVk}`}>
                       <Image
                           src="/vk-icon.svg"
                           width={23}
                           height={14}
                           alt="vk"
                           className={styles.socialListItemLinkIconImg}
                       ></Image>
                   </span>
                </a>
            </li>
            <li className={styles.socialListItem}>
                <a href="#" className={styles.socialListItemLink}>
                    <span className={styles.socialListItemLinkSpn}>YouTube</span>
                    <span className={`${styles.socialListItemLinkIcon} ${styles.socialListItemLinkIconYt}`}>
                       <Image
                           src="/youtube-icon.svg"
                           width={22}
                           height={16}
                           alt="vk"
                           className={styles.socialListItemLinkIconImg}
                       ></Image>
                   </span>
                </a>
            </li>
        </ul>
    </>;
};