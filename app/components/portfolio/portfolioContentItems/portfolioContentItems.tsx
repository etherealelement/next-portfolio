import { FC } from 'react';
import styles from "./portfolioContentItems.module.scss"
import Image from "next/image";
import {portfolioContentItemsProps} from "@/app/components/portfolio/portfolioContentItems/portfolioContentItems.props";
import Link from "next/link";
export const PortfolioContentItems: FC<portfolioContentItemsProps> = ({link,description,imgUrl}: portfolioContentItemsProps):JSX.Element => {
    return <li className={styles.content}>
        <Link href={link}>
            <Image
                src={imgUrl}
                width={522}
                height={422}
                alt={description}
            ></Image>
            <p className={styles.contentTitle}>{description}</p>
        </Link>
    </li>;
};