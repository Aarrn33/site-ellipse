/**
 * Ce petit composant vise à afficher une image sur toute la taille
 * de la page, avec un arrière-plan noir, un peu transparent.
 * Pour fonctionner, il nécessite le <ImageDisplayerContext>, qui lui
 * permet de connaître quelle image afficher, et s'il doit l'afficher :
 * en effet, il n'apparaît qu'une seule fois dans l'arbre de l'application,
 * dans le composant <Layout>.
 */

'use client';

import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';
import { useEffect } from 'react';
import { hideImage, useAppDispatch, useAppState } from '../../app/appProvider';
import styles from './imageDisplayer.module.scss';

export default function ImageDisplayer() {
  const dispatch = useAppDispatch(); // Fonction de dispatch liée à l'état de l'application

  const {
    imageDisplayer: { image, alt, caption, shouldDisplay },
  } = useAppState(); // État de l'application

  // Variable utilisée pour animer l'animation d'apparition et de disparition
  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
  }));

  // Effet de bord qui s'exécute lors de l'ouverture et de la fermeture de l'aperçu
  useEffect(() => {
    if (shouldDisplay) {
      document.body.style.overflow = 'hidden'; // Permet de faire disparaître la barre de scroll
      api.start({ from: { opacity: 0 }, to: { opacity: 1 } }); // Fait apparaître l'aperçu progressivement
    } else {
      document.body.style.overflow = 'auto'; // Fait réapparaître la barre de scroll
    }
  }, [shouldDisplay, api]);

  return shouldDisplay ? (
    <animated.div
      className={styles['image-displayer']}
      style={{ ...springs }}
      onPointerMove={e => e.stopPropagation()} // Permet de figer l'animation de la planète derrière
      onClick={() => dispatch(hideImage())} // Lorsque l'utilisateur clique en dehors de l'image, on ferme l'aperçu
    >
      <Image
        onClick={e => e.stopPropagation()} // On ne veut pas fermer l'aperçu si l'utilisateur clique sur l'image
        src={image}
        alt={alt}
        className={styles['image-displayer__image']}
      />
      <p className={styles['image-displayer__caption']}>{caption}</p>
    </animated.div>
  ) : (
    <></>
  );
}
