/**
 * Composant qui affiche un paragraphe dans un composant de type card.
 */

import styles from './card.module.scss';

export default function CardParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className={styles['card-paragraph']}>{children}</p>;
}
