/**
 * Petit composant permettant d'afficher un petit titre dans une card.
 * Permet de faire office de sous-titre vis-à-vis du composant <cardTitle>
 */

import { alegreya } from '../../app/fonts';
import styles from './card.module.scss';

export default function CardSubTitle({ children }: { children: string }) {
  return (
    <h3 className={`${alegreya.className} ${styles['card-subtitle']}`}>
      {children}
    </h3>
  );
}
