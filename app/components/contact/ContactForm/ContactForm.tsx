import { FC } from 'react';
import styles from "./ContactForm.module.scss";


export const ContactForm: FC = ():JSX.Element => {
    return <form className={styles.contactForm}></form>;
};