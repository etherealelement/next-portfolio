import { FC } from 'react';
import Link from "next/link";
import styles from "./Logo.module.scss";
export const Logo: FC = () => {
    return <div className={styles.logo}>
        <Link
        href={"#hero"}
        >
            <svg width="85" height="40" viewBox="0 0 85 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.1089 40V0H65.8461C70.0901 0 73.6268 0.901408 76.4561 2.70422C79.3227 4.46948 81.4633 6.87324 82.878 9.91549C84.2927 12.9202 85 16.2629 85 19.9437C85 24 84.2182 27.5305 82.6546 30.5352C81.091 33.5399 78.876 35.8685 76.0094 37.5211C73.1428 39.1737 69.755 40 65.8461 40H52.1089ZM79.9183 19.9437C79.9183 16.939 79.3599 14.2723 78.2431 11.9437C77.1635 9.61503 75.5813 7.79343 73.4965 6.47887C71.4117 5.16432 68.8616 4.50704 65.8461 4.50704H57.1347V35.493H65.8461C68.8988 35.493 71.4675 34.8169 73.5523 33.4648C75.6371 32.0751 77.2193 30.216 78.2989 27.8873C79.3785 25.5211 79.9183 22.8732 79.9183 19.9437Z" fill="url(#paint0_radial_1506_4834)"/>
                <path d="M18.763 0.225353H23.5096L28.7588 14.1408L34.0638 0.225353H38.8104L31.9418 17.6338L38.7546 34.1408L52.1567 0H57.6293L41.0441 40H36.6884L28.8146 21.1268L20.885 40H16.5293L0 0H5.41671L18.8747 34.1408L25.6316 17.6338L18.763 0.225353Z" fill="url(#paint1_radial_1506_4834)"/>
                <defs>
                    <radialGradient id="paint0_radial_1506_4834" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85 -12.6583) rotate(150.001) scale(105.319 851.48)">
                        <stop stopColor="#00C9FC"/>
                        <stop offset="0.563587" stopColor="#1A46EF"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_1506_4834" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85 -12.6583) rotate(150.001) scale(105.319 851.48)">
                        <stop stopColor="#00C9FC"/>
                        <stop offset="0.563587" stopColor="#1A46EF"/>
                    </radialGradient>
                </defs>
            </svg>
        </Link>
    </div>;
};