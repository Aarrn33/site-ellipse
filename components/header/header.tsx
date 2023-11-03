/**
 * Composant affichant le bandeau situé en haut de chaque page
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { alegreya } from '../../app/fonts';
import Logo from '../../public/images/misc/logo.png';
import styles from './header.module.scss';

// Énumération des titres des différentes pages
export enum Pathnames {
  Accueil = '/',
  Ginette = '/ginette',
  Ellipse = '/ellipse',
  Mpsi = '/mpsi',
}

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className={styles.navbar}>
      <div></div>
      <Link
        className={styles['navbar__logo-container']}
        href={Pathnames.Accueil}
      >
        <Image
          src={Logo}
          alt='Le Petit Prince assis sur un croissant de Lune (logo du site)'
          className={styles.navbar__logo}
        />
      </Link>
      <nav
        className={`${styles.navbar__links} ${
          showLinks && styles['navbar__links-shown']
        }`}
      >
        <ul className={alegreya.className}>
          <li>
            <Link href={Pathnames.Accueil} onClick={() => setShowLinks(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href={Pathnames.Ginette} onClick={() => setShowLinks(false)}>
              Ginette
            </Link>
          </li>
          <li>
            <Link href={Pathnames.Ellipse} onClick={() => setShowLinks(false)}>
              L&apos;Ellipse
            </Link>
          </li>
          <li>
            <Link href={Pathnames.Mpsi} onClick={() => setShowLinks(false)}>
              La MPSI
            </Link>
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
