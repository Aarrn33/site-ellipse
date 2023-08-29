/**
 * Ce composant affiche une image sur laquelle l'utilisateur peut
 * cliquer ; ce faisant, l'image s'agrandit et occupe toute la page.
 */

'use client';

import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';
import { displayImage, useAppDispatch } from '../../app/appProvider';
import styles from './clickableImage.module.scss';

export interface ClickableImageProps {
  src: StaticImageData;
  alt: string;
  caption?: string;
  containerClassName?: string;
  imageClassName?: string;
  style?: CSSProperties;
}

export default function ClickableImage(props: ClickableImageProps) {
  // Fonction permettant de "disperser" des actions dans toute l'application
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() =>
        dispatch(displayImage(props.src, props.alt, props.caption))
      }
      className={`${styles['clickable-image-container']} ${props.containerClassName}`}
    >
      <Image
        src={props.src}
        alt={props.alt}
        title={props.caption}
        placeholder='blur'
        className={`${styles['clickable-image']} ${props.imageClassName}`}
        style={props.style}
      />
    </div>
  );
}
