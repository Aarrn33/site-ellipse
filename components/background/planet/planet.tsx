/**
 * Composant correspondant à la planète qui
 * apparaît dans le fond de chaque page.
 **/

'use client';

import { animated, config, to, useSpring } from '@react-spring/three';
import { useLoader, useThree } from '@react-three/fiber';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import { Pathnames } from '../../header/header';

// Objet qui fait correspondre chaque nom de page à une orientation de la planète
const ZRot: { [path: string]: number } = {
  [Pathnames.Accueil]: (2 * Math.PI) / 5,
  [Pathnames.Ginette]: (4 * Math.PI) / 5,
  [Pathnames.Ellipse]: (6 * Math.PI) / 5,
  [Pathnames.Mpsi]: (8 * Math.PI) / 5,
  [Pathnames.Contact]: 0,
};

export default function Planet() {
  const { width, height } = useThree(state => state.size); // Largeur et hauteur du canvas
  const pathname = usePathname(); // Stocke la page sur laquelle on est situé

  // Variables utilisées pour animer le modèle 3D
  const [springs, api] = useSpring(
    () => ({
      rotX: 0,
      rotY: 0,
      rotZ: ZRot[Pathnames.Accueil],
      posY: -5,
      posZ: 1.5,
      config: config.molasses,
    }),
    []
  );

  // Chargement du modèle représentant la planète (mesh + couleurs)
  const materials = useLoader(MTLLoader, '/planete.mtl');
  const obj = useLoader(OBJLoader, '/planete.obj', loader => {
    materials.preload();
    loader.setMaterials(materials);
  });

  // Callback appelé lors d'un mouvement de la souris
  const pointerMoveHandler = useCallback(
    (event: PointerEvent) => {
      // On actualise l'orientation du modèle (avec animation fluide)
      api.start({
        rotX: event.clientY / height,
        rotY: event.clientX / width,
      });
    },
    [api, width, height]
  );

  // Callback appelé lors d'un scroll
  const scrollHandler = useCallback(() => {
    // On récupère ici la hauteur de la page
    const height = Math.max(
      document.body.getBoundingClientRect().height,
      document.documentElement.getBoundingClientRect().height
    );

    // Pourcentage de la page scrollée
    const scrollPercent = window.scrollY / (height - window.innerHeight);

    // On actualise la position de la planète en lançant une animation adaptée
    api.start({
      posY: scrollPercent,
      posZ: scrollPercent,
    });
  }, [api]);

  // Effet de bord permettant d'abonner les callback aux événements correspondants
  useEffect(() => {
    window.addEventListener('pointermove', pointerMoveHandler); // Mouvement de la souris
    window.addEventListener('scroll', scrollHandler); // Scroll de la page

    return () => {
      // On se désabonne des événements ici
      window.removeEventListener('pointermove', pointerMoveHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [pointerMoveHandler, scrollHandler]);

  // Effet de bord appelé lors d'un changement de page, pour animer le modèle
  useEffect(() => {
    // On change l'orientation du modèle selon l'axe Z (celui qui vient vers nous)
    api.start({ rotZ: ZRot[pathname] });
  }, [pathname, api]);

  return (
    <animated.mesh
      position={to(
        [
          springs.posY.to([0, 1], [-5, 30]),
          springs.posZ.to([0, 1], [1.5, -25]),
        ],
        (y, z) => [0, y, z]
      )}
      rotation={to(
        [
          springs.rotX.to([0, 1], [-Math.PI / 24, Math.PI / 24]),
          springs.rotY.to([0, 1], [-Math.PI / 2, Math.PI / 2]),
          springs.rotZ,
        ],
        (x, y, z) => [x, y, z]
      )}
    >
      <primitive object={obj} />
    </animated.mesh>
  );
}
