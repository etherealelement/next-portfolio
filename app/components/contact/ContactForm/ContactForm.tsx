import { FC } from 'react';
import styles from "./ContactForm.module.scss";
import {ContactInput} from "@/app/components/contact/ContactForm/ContactInput/Contactinput";
import {Button} from "@/app/components/ui/button/Button";


export const ContactForm: FC = ():JSX.Element => {
    return <form className={styles.contactForm}>
        <ContactInput
            text="Ф.И.О.*"
            placeholder="Укажите ваши Ф.И.О."
            type="text"
            name="fullname"
        />
        <ContactInput
            text="Должность/компания"
            placeholder="Укажите вашу должность/компанию"
            type="text"
            name="fullname"
        />
        <ContactInput
            text="E-mail*"
            placeholder="Укажите ваш E-mail"
            type="text"
            name="fullname"
        />
        <ContactInput
            text="Телефон*"
            placeholder="Укажите ваш телефон"
            type="text"
            name="fullname"
        />
        <Button
        styleProp="long"
        >Отправить заявку</Button>
        <label htmlFor="" className={styles.contactFormLabel}>
            <input type="checkbox" className={styles.contactFormLabelInput}/>
            <span className={styles.contactFormLabelSpan}></span>
            <span className={styles.contactFormLabelText}>Нажимая на кнопку «Отправить заявку», я соглашаюсь с Политикой конфиденциальности и даю Соглас ие на обработку персональных данных.</span>
        </label>
    </form>;
};