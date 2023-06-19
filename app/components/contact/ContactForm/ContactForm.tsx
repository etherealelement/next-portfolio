"use client";
import {FC, FormEvent, MutableRefObject, useState, useRef} from 'react';
import styles from "./ContactForm.module.scss";
import {ContactInput} from "@/app/components/contact/ContactForm/ContactInput/Contactinput";
import {Button} from "@/app/components/ui/button/Button";
import Link from "next/link";
import emailjs from "@emailjs/browser"
import {toast} from "react-toastify";
import {PropagateLoader} from "react-spinners";


export const ContactForm: FC = ():JSX.Element => {
    const [spinner, setSpinner] = useState(false);
    const [acceptWithRules, setAcceptWithRules] = useState(false);
    const formRef: MutableRefObject<HTMLFormElement> = useRef() as MutableRefObject<HTMLFormElement>

    // отправка данных на EmailJS сервер
    const sendEmail = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();


        setSpinner(true)
        emailjs.sendForm("service_iwcwg32", "template_xf4putg",formRef.current, "Z1tp-R_4MiXr-iQ9a")
            .then(result => {
                setSpinner(false)
                toast(`Данные отправлены 👌`)
            }, error => {
                setSpinner(false)
                toast(`Данные не отправлены 😢`)
            })

        formRef.current.reset()
    }


    const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

    return <form onSubmit={sendEmail} className={styles.contactForm} ref={formRef}>
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
            name="post/company"
        />
        <ContactInput
            text="E-mail*"
            placeholder="Укажите ваш E-mail"
            type="text"
            name="e-mail"
        />
        <ContactInput
            text="Телефон*"
            placeholder="Укажите ваш телефон"
            type="text"
            name="phone"
        />
        <Button
            isDisable={!acceptWithRules}
        styleProp="long"
        >
            {spinner ? <PropagateLoader color="#fff"></PropagateLoader> : "Отправить заявку"}
        </Button>
        <label htmlFor="" className={styles.contactFormCheckbox}>
            <input
                onChange={toggleAcceptWithRules}
                type="checkbox"
                className={styles.contactFormCheckboxInput}/>
            <span className={styles.contactFormCheckboxSpan}></span>
            <span className={styles.contactFormCheckboxText}>Нажимая на кнопку «Отправить заявку», я соглашаюсь с <Link href={"/privacy-policy"} legacyBehavior>
                <a className={styles.contactFormCheckboxLink}>Политикой конфиденциальности</a>
            </Link> и даю <Link href={"/personal-data-of-clients"} legacyBehavior>
                <a className={styles.contactFormCheckboxLink}>Согласие на обработку персональных данных.</a>
            </Link></span>
        </label>
    </form>;
};