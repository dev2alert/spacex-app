import React from "react";
import {Text} from "@pages/common/Text";
import {Title} from "@pages/common/Title";
import {HoverGradientEffect} from "@pages/common/HoverGradientEffect";
import styles from "./style.scss";

export namespace Advantage {
    export type ListProps = {children: React.ReactNode};

    export function List({children}: ListProps): React.ReactElement {
        return <div className={styles.list}>{children}</div>;
    }

    export interface ItemProps {
        startText: string;
        value: string;
        indicator?: string;
        endText: string;
    }

    export function Item({startText, value, indicator, endText}: ItemProps): React.ReactElement {
        return (
            <HoverGradientEffect.Element className={styles.item} hoverClassName={styles.hover}>
                <Text className={styles["start-text"]}>{startText}</Text>
                <div className={styles.value}>
                    <Title className={styles.text} size={1} disableMargin>
                        {value}
                    </Title>
                    {indicator ? (
                        <Title className={styles.indicator} size={5} disableMargin>
                            {indicator}
                        </Title>
                    ) : null}
                </div>
                <Text className={styles["end-text"]}>{endText}</Text>
            </HoverGradientEffect.Element>
        );
    }
}
