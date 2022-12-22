import React from "react";
import {Section} from "@pages/common/Section";
import {Title} from "@pages/common/Title";
import {Button} from "@pages/common/Button";
import styles from "./style.scss";
import {Advantage} from "./Advantage";

export function MainSection(): React.ReactElement {
    return (
        <Section className={styles["main-section"]} container containerClassName={styles.container}>
            <div className={styles.left}>
                <Title className={styles.travel} size={1} disableMargin>
                    Путешествие
                </Title>
                <Title className={styles.to} size={3} disableMargin>
                    на красную планету
                </Title>
                <Button className={styles.start}>Начать путешествие</Button>
            </div>
            <div className={styles.right}>
                <Advantage.List>
                    <Advantage.Item startText="мы" value="1" endText="на рынке" />
                    <Advantage.Item startText="гарантируем" value="50%" endText="безопасность" />
                    <Advantage.Item
                        startText="календарик за"
                        value="2001"
                        indicator="г."
                        endText="в подарок"
                    />
                    <Advantage.Item startText="путешествие" value="597" endText="дней" />
                </Advantage.List>
            </div>
        </Section>
    );
}
