import {FC} from 'react';
import styles from "./portfolioListItems.module.scss";
import {Arrow} from "@/app/components/ui/arrow/Arrow";


type lisItemsProps = {
    title: string;
}
export const PortfolioListItems: FC<lisItemsProps> = ({title}: lisItemsProps): JSX.Element => {
    return <li className={styles.portfolioListItem}>
        <button className={styles.portfolioListItemTitle}>{title}
            <span className={styles.portfolioListItemIcon}>
            <Arrow></Arrow>
        </span>
            <span className={styles.portfolioListItemBorder}></span>
        </button>

    </li>;
};