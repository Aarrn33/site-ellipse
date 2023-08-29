/**
 * Petit composant utilitaire qui affiche une image seule, avec
 * le style qui va bien, et la fonctionnalité d'aperçu.
 */

import utils from '../../styles/utils.module.scss';
import ClickableImage, {
  ClickableImageProps,
} from '../clickableImage/clickableImage';
import styles from './standaloneImage.module.scss';

export default function StandaloneImage(
  props: Omit<ClickableImageProps, 'className' | 'style'>
) {
  return (
    <ClickableImage
      src={props.src}
      alt={props.alt}
      caption={props.caption}
      containerClassName={`${styles['standalone-image']} ${utils['with-margin']}`}
    />
  );
}
