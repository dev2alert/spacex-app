import React, {useContext} from "react";
import {useLocalObservable} from "mobx-react";
import styles from "./style.scss";
import {NavBarToggler} from "./Toggler";
import {NavBarLink} from "./Link";
import {NavBarNav} from "./Nav";

export interface NavBarStore {
    hidden: boolean;
}

export interface INavBarContext {
    store: NavBarStore;
}

export const NavBarContext = React.createContext<INavBarContext | null>(null);

export function useNavBar(): INavBarContext {
    const context = useContext(NavBarContext);

    if (!context) {
        throw new Error("useNavBar must be used within a NavBar.");
    }

    return context;
}

export interface NavBarProps {
    children: React.ReactNode;
}

export function NavBar({children}: NavBarProps): React.ReactElement {
    const store = useLocalObservable<NavBarStore>(() => ({
        hidden: true
    }));

    return (
        <NavBarContext.Provider value={{store}}>
            <div className={styles.navbar}>{children}</div>
        </NavBarContext.Provider>
    );
}

export namespace NavBar {
    export const Nav = NavBarNav;

    export const Link = NavBarLink;

    export const Toggler = NavBarToggler;
}
