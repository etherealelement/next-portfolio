import { FC } from 'react';
import {ButtonProps} from "@/app/components/ui/button/Button.props";
import styles from "./Button.module.scss"

export const Button: FC<ButtonProps> = ({children,isDisable,  styleProp, ...props}:ButtonProps) => {
    return <>
    <button {...props} className={styleProp === "long" ? styles.buttonWidth : styles.button} disabled={isDisable}>
        {children}
    </button>
    </>;
};