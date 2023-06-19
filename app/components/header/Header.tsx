"use client"
import {FC, useState} from 'react';
import {Logo} from "@/app/components/ui/logo/Logo";
import styles from "./Header.module.scss";
import Link from "next/link";
import "../../globals.css";
import {useMediaQuery} from "@/app/hooks";
import stylesMenu from "./Mobilemenu.module.scss";

export const Header: FC = () => {
    const isMobile = useMediaQuery(640);
    const [menuOpen, setMenuOpen] = useState(false)
    const currentMenuItemClass = isMobile ? stylesMenu.menuItem : styles.headerContainerNavListItems;
    const handleToggleMenu = () => {
        (document.querySelector("body") as HTMLBodyElement).classList.toggle("overflow-hidden");
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        (document.querySelector("body") as HTMLBodyElement).classList.toggle("overflow-hidden");
        setMenuOpen(false);
    }

    return (
        <>
            <header className={styles.header}>
               <div className={`container ${styles.headerContainer}`}>
                   <Logo></Logo>
                   {isMobile && <button onClick={handleToggleMenu} className={`${styles.burgerMenu} ${menuOpen ? styles.open : ''}`}>
                       <span></span>
                       <span></span>
                       <span></span>
                   </button>}
                   <nav className={`${isMobile ? stylesMenu.menu : styles.headerContainerNav} ${menuOpen ? stylesMenu.open : ""}`}>
                       <ul className={`${isMobile ? styles.listReset : styles.headerContainerNavList}`}>
                           <li className={currentMenuItemClass}>
                               <Link
                                   className={styles.headerContainerNavListItemsLink}
                                   href="#about"
                               >
                                   Обо мне
                               </Link>
                           </li>
                           <li className={currentMenuItemClass}>
                               <Link
                                   className={styles.headerContainerNavListItemsLink}
                                   href="/"
                               >
                                   Навыки
                               </Link>

                           </li>
                           <li className={currentMenuItemClass}>

                               <Link
                                   className={styles.headerContainerNavListItemsLink}
                                   href="/"
                               >
                                   Портфолио
                               </Link>
                           </li>
                           <li className={currentMenuItemClass}>
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