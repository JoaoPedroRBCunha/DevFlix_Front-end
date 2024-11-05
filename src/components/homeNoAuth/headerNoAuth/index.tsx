"use client";

import styles from "./styles.module.scss"
import {Button, Container} from "reactstrap";
import Link from "next/link";

const HeaderNoAuth = () => {
    return (
        <>
            <div className={styles.ctaSection}>
                <p>Se cadastre para ter acesso aos filmes</p>
            </div>
            <Container className={styles.nav}>
                <img src="/devFlix.svg"
                     alt="LogoDevFlix"
                     className={styles.imgLogoNav}
                />
                <div>
                    <Link href="/login">
                        <Button className={styles.navBtn} outline>Entrar</Button>
                    </Link>
                    <Link href="/register">
                        <Button className={styles.navBtn} outline>Quero fazer parte</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
}

export default HeaderNoAuth;