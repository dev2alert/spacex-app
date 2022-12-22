import React, {useCallback} from "react";
import {runInAction} from "mobx";
import {observer} from "mobx-react";
import styles from "./style.scss";
import {useNavBar} from ".";
import {TogglerIcon} from "./icons/Toggler";
import {TogglerCloseIcon} from "./icons/TogglerClose";

export const NavBarToggler: React.FC = React.memo(
    observer(() => {
        const {store} = useNavBar();
        const {hidden} = store;

        const handleClick = useCallback(() => {
            runInAction(() => {
                store.hidden = !store.hidden;
            });
        }, []);

        return (
            <button className={styles.toggler} onClick={handleClick}>
                {hidden ? <TogglerIcon /> : <TogglerCloseIcon />}
            </button>
        );
    })
);

NavBarToggler.displayName = "NavBarToggler";
