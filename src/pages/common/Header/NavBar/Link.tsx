import React, {useMemo} from "react";
import {NavLink} from "react-router-dom";
import styles from "./style.scss";

export interface NavBarLinkProps extends React.ComponentProps<"li"> {
    to: string;
}

export function NavBarLink({
    to,
    className,
    children,
    ...props
}: NavBarLinkProps): React.ReactElement {
    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.item];

        if (className) {
            classList.push(className);
        }

        return classList;
    }, [className]);

    return (
        <li className={classList.join(" ")} {...props}>
            <NavLink className={styles.link} to={to}>
                {children}
            </NavLink>
            <div className={styles.line} />
        </li>
    );
}
