"use client"
import { FC } from 'react';
import styles from "./portfolioContentItems.module.scss"
import Image from "next/image";
import {portfolioContentItemsProps} from "@/app/components/portfolio/portfolioContentItems/portfolioContentItems.props";
import Link from "next/link";
import {useMediaQuery} from "@/app/hooks";
export const PortfolioContentItems: FC<portfolioContentItemsProps> = ({link,description,imgUrl}: portfolioContentItemsProps):JSX.Element => {
    const isMobile:boolean = useMediaQuery(1000)
    const isMobile390:boolean = useMediaQuery(390)

    return <li className={styles.content}>
        <Link href={link} className={styles.contentLink}>
            <Image
                src={imgUrl}
                width={isMobile ? 200 : 422 && isMobile390 ? 200 : 422}
                height={isMobile ? 200 : 322 && isMobile390 ? 200 : 422}
                alt={description}
                className={styles.contentLinkImg}
            ></Image>
            <p className={styles.contentTitle}>{description}</p>
        </Link>
    </li>;
};