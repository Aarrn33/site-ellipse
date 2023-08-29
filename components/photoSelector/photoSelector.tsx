/**
 * Widget qui permet à l'utilisateur de sélectionner la promo dont
 * il veut voir la photo de classe.
 */

'use client';

import { StaticImageData } from 'next/image';
import { useState } from 'react';
import CardTitle from '../cards/cardTitle';
import TextCard from '../cards/textCard';
import ClickableImage from '../clickableImage/clickableImage';
import styles from './photoSelector.module.scss';

export interface PhotoSelectorProps {
  photos: { [year: string]: StaticImageData };
}

export default function PhotoSelector({ photos }: PhotoSelectorProps) {
  // La photo initialement affichée est celle de l'année courante
  const [currentYear, setCurrentYear] = useState(Object.keys(photos)[0]);

  return (
    <TextCard>
      <div className={styles['photo-selector__header']}>
        <CardTitle>Les classes d&apos;Ellipse</CardTitle>
        <select
          onChange={e => setCurrentYear(e.target.value)}
          className={styles['photo-selector__selector']}
        >
          {Object.keys(photos).map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <ClickableImage
        src={photos[currentYear]}
        alt={`Photo de classe de l'Ellipse, promo ${currentYear}. Chemise blanche, khâlot du parrain sur l'épaule, sur le perron de la chapelle.'`}
        caption={`Photo de classe de l'Ellipse ${currentYear}`}
        imageClassName={styles['photo-selector__image']}
      />
    </TextCard>
  );
}
