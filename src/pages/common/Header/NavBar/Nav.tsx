import React, {useEffect, useMemo} from "react";
import {observer} from "mobx-react";
import styles from "./style.scss";
import {useNavBar} from ".";

export interface NavBarNavProps {
    children: React.ReactNode;
}

export const NavBarNav: React.FC<NavBarNavProps> = observer(({children}) => {
    const {
        store: {hidden}
    } = useNavBar();

    const classList = useMemo<string[]>(() => {
        const classList: string[] = [styles.nav];

        if (hidden) {
            classList.push(styles.hidden);
        }

        return classList;
    }, [hidden]);

    useEffect(() => {
        if (!hidden) {
            document.body.classList.add("fixed");
        } else {
            document.body.classList.remove("fixed");
        }

        return () => document.body.classList.remove("fixed");
    }, [hidden]);

    return (
        <nav className={classList.join(" ")}>
            <ul className={styles.list}>{children}</ul>
        </nav>
    );
});
