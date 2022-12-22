import React from "react";
import styles from "../style.scss";

export const TogglerCloseIcon: React.FC = React.memo(() => {
    return (
        <svg className={styles.icon}>
            <path
                d="M25 7L7 25"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25 25L7 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
});

TogglerCloseIcon.displayName = "TogglerCloseIcon";
