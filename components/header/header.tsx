/**
 * Composant affichant le bandeau situé en haut de chaque page
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';

import { alegreya } from '../../app/layout';
import styles from './header.module.scss';

// Énumération des titres des différentes pages
export enum Pathnames {
  Accueil = '/',
  Ginette = '/ginette',
  Ellipse = '/ellipse',
  Mpsi = '/mpsi',
  Contact = '/contact',
}

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
            <Link href={Pathnames.Accueil}>Accueil</Link>
          </li>
          <li>
            <Link href={Pathnames.Ginette}>Ginette</Link>
          </li>
          <li>
            <Link href={Pathnames.Ellipse}>L&apos;Ellipse</Link>
          </li>
          <li>
            <Link href={Pathnames.Mpsi}>La MPSI</Link>
          </li>
          <li>
            <Link href={Pathnames.Contact}>Contact</Link>
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
