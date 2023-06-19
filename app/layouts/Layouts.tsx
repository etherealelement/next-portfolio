import React, { FC } from 'react';
import {LayotsProps} from "@/app/layouts/Layots.props";
import {Header} from "@/app/components/header/Header";
import {Footer} from "@/app/components/footer/Footer";
const Layouts: FC<LayotsProps> = ({children}:LayotsProps):JSX.Element => {
    return <>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>;
};

export  default  Layouts;