import { FC } from 'react';
import styles from "./SkillItem.module.scss";
import {SkillsItemProps} from "@/app/components/skills/skillsitem/SkillsItem.props";
import Image from "next/image";
export const SkillItem: FC<SkillsItemProps> = ({children,title,iconClass}:SkillsItemProps):JSX.Element => {
    return <li className={styles.skillsItem}>
        <h3 className={`${styles.skillsItemTitle}`}>
            <div className={styles.skillsItemTitleContainer}>
                <Image
                    src={iconClass}
                    width={30}
                    height={25}
                    alt={"icon"}
                >
                </Image>
                <span className={styles.skillsItemTitleText}>{title}</span>
            </div>
            <span className={styles.skillsItemTitleBorder}></span>
        </h3>

        <p className={styles.skillsItemText}>{children}</p>
    </li>;
};