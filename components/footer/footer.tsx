/**
 * Composant qui affiche le footer, c'est-à-dire
 * le bas de page.
 */

import { alegreya } from '../../app/fonts';
import styles from './footer.module.scss';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles['footer-container']}>
      <p className={`${alegreya.className} ${styles.footer__text}`}>
        Contact : arnaudlmdc [at] gmail.com
      </p>
      <p className={`${alegreya.className} ${styles.footer__text}`}>
        © 1854 - {year} Les CD web Ellipse{' '}
        <span className={styles.footer__text__hinc}>hinc</span>
      </p>
    </footer>
  );
}
