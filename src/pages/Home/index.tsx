import React from "react";
import {Page} from "@pages/common/Page";
import {MainSection} from "./sections/Main";

export default function HomePage(): React.ReactElement {
    return (
        <Page title="Home">
            <MainSection />
        </Page>
    );
}
