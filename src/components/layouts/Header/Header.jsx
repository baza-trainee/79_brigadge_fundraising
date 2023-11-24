/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useRef } from "react";

import Container from "../Container/Container";

import Logo from "../../../assets/img/header/logo.png";
import styles from "./Header.module.css";

const navLinks = [
  { text: "Про підрозділ", sectionId: "1" }, // change numbers to element id
  { text: "Чому важливо?", sectionId: "2" },
  { text: "Бекфаєр К1", sectionId: "3" },
];

const Header = ({ links = navLinks }) => {
  const [active, setActive] = useState();
  const scrollRef = useRef();

  const handleButtonClick = (sectionId) => {
    const head = document.querySelector("header");
    const element = document.getElementById(sectionId);
    const h = head.offsetHeight;
    if (element) {
      scrollRef.current = element.offsetTop - h;
      window.scrollTo(0, scrollRef.current);
    }
    setActive(false);
  };

  useEffect(() => {
    const closeModal = (event) => {
      if (event.code === "Escape") {
        setActive(false);
      }
    };

    document.body.addEventListener("keyup", (event) => closeModal(event));

    return () => {
      window.removeEventListener("keyup", closeModal);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_wrapper}>
          <div
            className={styles.logo_wrapper}
            onClick={() => handleButtonClick("ukrainian-wings")}
          >
            <img className={styles.logo_img} src={Logo} alt="logo" />
          </div>
          <nav
            className={
              active
                ? `${styles.nav_wrapper} ${styles.active}`
                : styles.nav_wrapper
            }
          >
            <ul className={styles.nav_list}>
              {links.map((link) => (
                <li className={styles.nav_item} key={link.sectionId}>
                  <a
                    className={styles.nav_href}
                    onClick={() => handleButtonClick(link.sectionId)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className={styles.button_donat}
            href="https://send.monobank.ua/jar/4jhbEszhq6"
            rel="noreferrer"
            target="_blank"
          >
            На Крила
          </a>
          <div
            className={styles.burger_menu_icon}
            onClick={() => setActive(!active)}
          />
        </div>
        <div
          className={
            active
              ? `${styles.burger_menu_blur} ${styles.active}`
              : styles.burger_menu_blur
          }
          onClick={() => setActive(false)}
        ></div>
      </Container>
    </header>
  );
};
export default Header;
