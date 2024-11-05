import styles from "../../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presetationSection";
import CardsSection from "../components/homeNoAuth/cardsSection";

const HomeNoAuth = () => {
  return (
      <>
          <main>
              <div className={styles.sectionBackground}>
                  <HeaderNoAuth />
                  <PresentationSection />
                  <CardsSection />
              </div>
          </main>
      </>
  )
}

export default HomeNoAuth;