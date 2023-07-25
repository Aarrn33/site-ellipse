/**
 * Composant qui affiche un titre dans un composant de type card.
 */

import { alegreya } from '../../app/fonts';
import styles from './card.module.scss';

export default function CardTitle({ children }: { children: string }) {
  return (
    <h2 className={`${alegreya.className} ${styles['card-title']}`}>
      {children}
    </h2>
  );
}
