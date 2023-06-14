import { FC } from 'react';
import styles from "./Title.module.scss";
import {TitleProps} from "@/app/components/ui/title/Title.props";
export const Title: FC<TitleProps> = ({children}: TitleProps):JSX.Element => {
    return <h2
    className={styles.title}
    >{children}
    <span className={styles.titleSpan}></span>
    </h2>;
};