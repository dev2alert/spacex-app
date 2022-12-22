import React, {useMemo} from "react";
import styles from "./style.scss";

export interface TextProps extends React.ComponentProps<"span"> {
    className?: string;
}

export function Text({className, ...props}: TextProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.text];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    return <span className={classList.join(" ")} {...props} />;
}
