import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode, useEffect } from "react";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import SlideSection from "../src/components/homeNoAuth/slideSection";
import courseService, { CourseType } from "../src/services/courseService";
import styles from "../styles/HomeNoAuth.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import PresentationSection from "../src/components/homeNoAuth/presetationSection";

interface IndexPageProps {
    children?: ReactNode;
    course: CourseType[];
}

const HomeNoAuth = ({course}: IndexPageProps) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Head>
                <title>Onebitflix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <meta property="og:title" content="Onebitflix" key="title" />
                <meta
                    name="description"
                    content="Tenha acesso aos melhors conteúdos de programação de uma forma simples e fácil!"
                />
            </Head>
            <main>
                <div className={styles.sectionBackground}>
                    <HeaderNoAuth />
                    <PresentationSection />
                </div>
                <CardsSection />
                <SlideSection newestCourses={course}/>
            </main>
        </>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//     const res = await courseService.getNewestCourses();
//     return {
//         props: {
//             course: res.data,
//         },
//         revalidate: 3600 * 24,
//     };
// };

export default HomeNoAuth;