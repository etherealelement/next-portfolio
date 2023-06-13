import { FC } from 'react';
import {ButtonProps} from "@/app/components/ui/button/Button.props";
import styles from "./Button.module.scss"

export const Button: FC<ButtonProps> = ({children, ...props}:ButtonProps) => {
    return <>
    <button {...props} className={styles.button}>
        {children}
    </button>
    </>;
};