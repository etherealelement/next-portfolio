import { FC } from 'react';
import styles from "./Skills.module.scss"
import {Title} from "@/app/components/ui/title/Title";
import {SkillItem} from "@/app/components/skills/skillsitem/SkillItem";
export const Skills: FC = ():JSX.Element => {
    return <section id="skills" className={styles.skills}>
        <div className="container">
            <Title>НАВЫКИ</Title>
        </div>

        <div className="sub-container">
            <ul className={styles.skillsList}>
                <SkillItem
                    title="Веб-Разработка"
                    iconClass="/web.svg">Javascript, WebStorm.</SkillItem>
                <SkillItem
                    title="Frontend-Разработка"
                    iconClass="/front.svg">HTML, CSS, LESS, SASS, Bootstrap, React, TypeScript, Vite, NextJS</SkillItem>
                <SkillItem
                    title="UI/UX Дизайн"
                    iconClass="/ui.svg">Figma, Исследование Пользователей, Юзабилити-Тестирование</SkillItem>
            </ul>
        </div>
    </section>;
};