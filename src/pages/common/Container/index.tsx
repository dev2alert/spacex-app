import React, {useMemo} from "react";
import styles from "./style.scss";

export interface ContainerProps extends React.ComponentProps<"div"> {
    className?: string;
}

export function Container({className, ...props}: ContainerProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.container];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    return <div className={classList.join(" ")} {...props} />;
}
