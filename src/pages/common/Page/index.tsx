import React from "react";
import {Helmet} from "react-helmet";
import {Header} from "../Header";

export interface PageProps {
    title: string;
    children: React.ReactNode;
}

export function Page({title, children}: PageProps): React.ReactElement {
    return (
        <>
            <Helmet>
                <title>{title} - SpaceX</title>
            </Helmet>
            <Header />
            {children}
        </>
    );
}
