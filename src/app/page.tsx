"use client"

import styles from "../../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presetationSection";
import CardsSection from "../components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import {CourseType} from "@/services/courseService";
import {ReactNode} from "react";

interface IndexPageProps {
    children?: ReactNode;
    course: CourseType[];
}

const HomeNoAuth = ({course}: IndexPageProps) => {
  return (
      <>
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

export default HomeNoAuth;