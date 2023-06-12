import {FC} from 'react';
import {Logo} from "@/app/components/ui/logo/Logo";
import styles from "./Header.module.scss";
import Link from "next/link";
import "../../globals.css";

export const Header: FC = () => {
    return (
        <>
            <header className={styles.header}>
               <div className={`container ${styles.headerContainer}`}>
                   <Logo></Logo>
                   <nav className={styles.headerContainerNav}>
                       <ul className={styles.headerContainerNavList}>
                           <li className={styles.headerContainerNavListItems}>
                               <Link
                                   className={styles.headerContainerNavListItemsLink}
                                   href="/"
                               >
                                   Обо мне
                               </Link>
                           </li>
                           <li className={styles.headerContainerNavListItems}>
                               <Link
                                   className={styles.headerContainerNavListItemsLink}
                                   href="/"
                               >
                                   Навыки
                               </Link>

                           </li>
                           <li className={styles.headerContainerNavListItems}>

                               <Link
                                   className={styles.headerContainerNavListItemsLink}
                                   href="/"
                               >
                                   Портфолио
                               </Link>
                           </li>
                           <li className={styles.headerContainerNavListItems}>
                               <Link
                                   className={styles.headerContainerNavListItemsLink}
                                   href="/"
                               >
                                   Связаться со мной
                               </Link>
                           </li>
                       </ul>
                   </nav>
               </div>
            </header>
        </>
    )
};