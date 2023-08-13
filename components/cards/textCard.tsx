/**
 * Composant qui affiche un petit cadre blanc agréable autour
 * du contenu textuel du site.
 */

import styles from './card.module.scss';

export default function TextCard({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`${styles.card} ${styles['text-container']}`}
      style={{ backgroundColor: 'white' }}
    >
      {children}
    </div>
  );
}
