/**
 * Simple wrapper qui contient le style à appliquer
 * aux grands titres qui sont affichés au début de chaque page.
 */

import styles from './pageTitle.module.scss';

export default function PageTitle({ children }: { children: string }) {
  return <h1 className={styles['page-title']}>{children}</h1>;
}
