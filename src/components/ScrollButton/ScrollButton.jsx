import { useRef, useState, useEffect } from "react";

import styles from "./ScrollButton.module.css";
import ScrollBtn from "../../assets/img/scroll_button/plane_up.png";

export const ScrollButton = () => {
    const [isScrollBtn, setScrollBtn] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
          if (window.scrollY > 500) {
            setScrollBtn(true);
          } else {
            setScrollBtn(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const handleScroll = () => {
        const el = ref.current;

        el.classList.add(styles.animate);

        setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        }, 500);
    };

    return (
        <div
        ref={ref}
        onClick={handleScroll}
        className={`${styles.container} ${isScrollBtn ? styles.active : ""}`}
        >
        <img className={styles.icon} src={ScrollBtn} alt="scroll_btn" />
        </div>
  );
};