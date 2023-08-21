/**
 * Composant qui affiche un petit cadre blanc agréable autour
 * du contenu textuel du site.
 */

import utils from '../../styles/utils.module.scss';
import styles from './card.module.scss';
export interface TextCardProps {
  noMargin?: boolean;
  children?: React.ReactNode;
}

export default function TextCard({
  children,
  noMargin = false,
}: TextCardProps) {
  return (
    <div
      className={`${noMargin ? '' : utils['with-margin']} ${styles.card} ${
        styles['text-container']
      }`}
      style={{ backgroundColor: 'white' }}
    >
      {children}
    </div>
  );
}
