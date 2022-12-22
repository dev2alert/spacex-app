import React, {useMemo} from "react";
import {HoverGradientEffect} from "../HoverGradientEffect";
import styles from "./style.scss";

export interface ButtonProps extends React.ComponentProps<"button"> {
    className?: string;
    children: React.ReactNode;
}

export function Button({className, children, ...props}: ButtonProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.button];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    return (
        <HoverGradientEffect.Element component="button" className={classList.join(" ")} {...props}>
            {children}
        </HoverGradientEffect.Element>
    );
}
