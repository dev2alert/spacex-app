import React from "react";
import {NavLink} from "react-router-dom";
import {Container} from "../Container";
import styles from "./style.scss";
import logo from "./assets/logo.png";
import {NavBar} from "./NavBar";

export const Header: React.FC = React.memo(() => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <div className={styles.logo}>
                    <NavLink className={styles.link} to="/">
                        <img className={styles.image} src={logo} alt="SpaceX Logo" />
                    </NavLink>
                </div>
                <NavBar>
                    <NavBar.Toggler />
                    <NavBar.Nav>
                        <NavBar.Link to="/">Главная</NavBar.Link>
                        <NavBar.Link to="#">Технология</NavBar.Link>
                        <NavBar.Link to="#">График полетов</NavBar.Link>
                        <NavBar.Link to="#">Гарантии</NavBar.Link>
                        <NavBar.Link to="#">Контакты</NavBar.Link>
                    </NavBar.Nav>
                </NavBar>
            </Container>
        </header>
    );
});

Header.displayName = "Header";
