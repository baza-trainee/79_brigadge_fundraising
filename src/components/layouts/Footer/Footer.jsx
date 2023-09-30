import Container from '../Container/Container';
import SiteIcon from '../../../assets/img/footer/Site.svg';
import FacebookIcon from '../../../assets/img/footer/Facebook.svg';
import LinkedinIcon from '../../../assets/img/footer/Linkedin.svg';
import TelegramIcon from '../../../assets/img/footer/Telegram.svg';

import styles from './Footer.module.css';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <Container className={styles['footer-container']}>
        <div className={styles['footer-social-icons']}>
          <a href="/#"><img src={SiteIcon} alt='Site' /></a>
          <a href="/#"><img src={LinkedinIcon} alt='Linkedin' /></a>
          <a href="/#"><img src={TelegramIcon} alt='Telegram' /></a>
        </div>
        <p className={styles['footer-copyright']}>Розробка Baza Trainee Ukraine 2023 (©) Всі права захищені</p>
      </Container>
    </footer>
  );
};

export default Footer;
