import React, {useMemo} from "react";
import styles from "./style.scss";

export interface TitleProps extends React.ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
    size: number;
    disableMargin?: boolean;
}

export function Title({
    size,
    disableMargin = false,
    className,
    children,
    ...props
}: TitleProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.title];

        if (className) {
            classList.push(className);
        }
        if (disableMargin) {
            classList.push(styles["disable-margin"]);
        }

        return classList;
    }, [className]);

    return React.createElement("h" + size, {className: classList.join(" "), ...props}, children);
}
