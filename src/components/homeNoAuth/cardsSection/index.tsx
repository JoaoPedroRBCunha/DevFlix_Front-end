"use client";

import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function () {
    return (
        <>
            <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
            <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
                <div className={styles.card1}>
                    <p className={styles.cardTitle}>Filmes</p>
                    <p className={styles.cardDescription}>
                        No DevFlix, vocês encontram uma ampla seleção de filmes, desde os grandes clássicos
                        até os lançamentos mais aguardados, tudo em um só lugar e com uma qualidade de exibição
                        excepcional.
                    </p>
                </div>
                <div className={styles.card2}>
                    <p className={styles.cardTitle}>Séries</p>
                    <p className={styles.cardDescription}>
                        No DevFlix, você encontra uma variedade de séries para todos os gostos:
                        dos dramas intensos às comédias que vão fazer você dar boas risadas, passando
                        por suspense, ficção científica, e muito mais!
                    </p>
                </div>
                <div className={styles.card3}>
                    <p className={styles.cardTitle}>Documentários</p>
                    <p className={styles.cardDescription}>
                        No DevFlix, vocês encontram uma ampla coleção de documentários, cobrindo desde
                        história e ciência até cultura e questões sociais, com produções que nos fazem
                        refletir e ver o mundo sob novas perspectivas.
                    </p>
                </div>
            </Container>
        </>
    );
};

export default CardsSection;
