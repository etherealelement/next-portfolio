import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SkillsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: ReactNode;
    title: string;
    iconClass: string;
}