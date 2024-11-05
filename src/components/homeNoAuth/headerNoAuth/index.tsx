"use client";

import styles from "./styles.module.scss"
import {Button, Container} from "reactstrap";

const HeaderNoAuth = () => {
    return (
        <>
            <div className={styles.ctaSection}>
                <img src="/homeNoAuth/logoCta.png"
                     alt="LogoCta"
                     className={styles.imgCta}
                />
                <p>Se cadastre para ter acesso aos cursos</p>
                <img src="/homeNoAuth/logoCta.png"
                     alt="LogoCta"
                     className={styles.imgCta}
                />
            </div>
            <Container>
                <img src="/devFlix.svg" alt="LogoDevFlix" />
                <Button outline color="primary">Entrar</Button>
            </Container>
        </>
    );
}

export default HeaderNoAuth;