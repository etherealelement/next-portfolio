import { FC } from 'react';
import styles from "./ContactInput.module.scss";
import {ContactInputProps} from "@/app/components/contact/ContactForm/ContactInput/Contactinput.props";
export const ContactInput: FC<ContactInputProps> = ({type, text,name,placeholder}: ContactInputProps):JSX.Element => {
    return <label className={styles.contactLabel}>
        <span className={styles.contactLabelText}>
            {text}
        </span>
            <input
                className={styles.contactLabelInput}
                type={type}
                placeholder={placeholder}
                name={name}/>
    </label>;
};