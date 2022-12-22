import React from "react";
import styles from "../style.scss";

export const TogglerIcon: React.FC = React.memo(() => {
    return (
        <svg className={styles.icon}>
            <path
                d="M5 16H27"
                stroke="#FFFDFD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 8H27"
                stroke="#FFFDFD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 24H27"
                stroke="#FFFDFD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
});

TogglerIcon.displayName = "TogglerIcon";
