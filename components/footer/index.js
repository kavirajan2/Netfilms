import React from "react";

import styles from "./styles.module.css";
function Footer() {
    return (
        <footer className={styles.footer}>
            Netfilms &copy; {new Date().getFullYear()} | All rights reserved
        </footer>
    );
}

export default Footer;