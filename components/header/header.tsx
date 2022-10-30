/**
 * Composant affichant le bandeau situé en haut de chaque page
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';

import { alegreya } from '../../app/layout';
import styles from './header.module.scss';

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__logo}>logo</div>
      <nav
        className={`${styles.navbar__links} ${
          showLinks && styles['navbar__links-shown']
        }`}
      >
        <ul className={alegreya.className}>
          <li>
            <Link href='#'>Accueil</Link>
          </li>
          <li>
            <Link href='#'>Ginette</Link>
          </li>
          <li>
            <Link href='#'>La MPSI</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setShowLinks(prev => !prev)}
        className={`${styles.burger} ${showLinks && styles['burger-cross']}`}
      >
        <span className={styles.burger__bar}></span>
      </button>
    </header>
  );
}
