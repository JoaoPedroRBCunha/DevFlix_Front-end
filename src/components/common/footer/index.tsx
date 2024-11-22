import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return (
    <>
      <Container className={styles.footer}>
        <img
          src="/devFlix.svg"
          alt="logoFooter"
          className={styles.footerLogo}
        />
        <a
          href="http://localhost:3001"
          target={"blank"}
          className={styles.footerLink}
        >
          DEVFLIX.COM
        </a>
      </Container>
    </>
  );
};

export default Footer;
