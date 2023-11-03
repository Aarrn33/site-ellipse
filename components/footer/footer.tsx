/**
 * Composant qui affiche le footer, c'est-à-dire
 * le bas de page.
 */

import { alegreya } from '../../app/fonts';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <p className={`${alegreya.className} ${styles.footer__text}`}>
        Contact : cdwebellipse@gmail.com
      </p>
      <p className={`${alegreya.className} ${styles.footer__text}`}>
        © 1854 - 2023 Les CD web Ellipse{' '}
        <span className={styles.footer__text__hinc}>hinc</span>
      </p>
    </footer>
  );
}
