/**
 * Composant permettant d'afficher du texte à côté d'une image.
 * L'image est cliquable, pour pouvoir être agrandie.
 */

import ClickableImage, {
  ClickableImageProps,
} from '../clickableImage/clickableImage';
import styles from './card.module.scss';

export interface ImageCardProps extends Omit<ClickableImageProps, 'className'> {
  className?: string;
  children?: React.ReactNode;
}

export default function ImageCard(props: ImageCardProps) {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <ClickableImage
        src={props.src}
        alt={props.alt}
        caption={props.caption}
        className={styles['upper-part']}
      />
      <div className={`${styles['text-container']} ${styles['lower-part']}`}>
        {props.children}
      </div>
    </div>
  );
}
