
import { FC } from 'react';
import styles from "./Portfolio.module.scss"
import {Title} from "@/app/components/ui/title/Title";
import {PortfolioListItems} from "@/app/components/portfolio/portfolioListItems/portfolioListItems";
import {PortfolioContentItems} from "@/app/components/portfolio/portfolioContentItems/portfolioContentItems";
import {PortfolioArray} from "@/app/utils/helpers/PortfolioArray";
export const Portfolio: FC = () => {
    return <section className={styles.portfolio}>
        <div className="container">
            <Title>ПОРТФОЛИО</Title>
        </div>
        <div className="sub-container">
            <ul className={styles.portfolioList}>
                <PortfolioListItems title="Мои проекты"></PortfolioListItems>
            </ul>
            <ul className={styles.portfolioGridContainer}>
                {PortfolioArray.map(item => <PortfolioContentItems
                key={item.id}
                description={item.description}
                imgUrl={item.imgUrl}
                link={item.link}
                />)}
            </ul>
        </div>
    </section>;
};