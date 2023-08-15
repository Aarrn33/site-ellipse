/**
 * Composant affichant les petites étoiles qui
 * apparaissent dans le fond de chaque page.
 */

'use client';

import { animated, config, to, useSpring } from '@react-spring/three';
import { PointMaterial, Points } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useCallback, useEffect } from 'react';

// Constantes utiles
const STARS_COUNT = 2500; // Nombre d'étoiles affichées
const STARS_SIZE = 0.15; // Taille des étoiles
const PARALLAX_X = 5; // Envergure de l'effet de parallaxe selon l'axe horizontal
const PARALLAX_Y = 2.5; // Envergure de l'effet de parallaxe selon l'axe vertical
const MAX_Y = 50; // Position des étoiles selon l'axe y lorsque l'utilisateur est en bas de page

// On génère ici les positions (aléatoires) des étoiles qui s'affichent
const starsPositions = new Float32Array(STARS_COUNT * 3);

for (let i = 0; i < STARS_COUNT; i++) {
  starsPositions[i * 3 + 0] = (Math.random() - 0.5) * 200;
  starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 100 - 20;
  starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 35;
}

export default function Stars() {
  const { width: canvasWidth, height: canvasHeight } = useThree(
    state => state.size
  ); // Largeur et hauteur du canvas

  // Variables utilisées pour animer les étoiles
  const [springs, api] = useSpring(() => ({
    parallaxX: 0,
    parallaxY: 0,
    posY: 0,
    config: config.molasses,
  }));

  // Callback appelé lors d'un mouvement de la souris
  const pointerMoveHandler = useCallback(
    (event: PointerEvent) => {
      // On actualise l'effet de parallaxe
      api.start({
        parallaxX: event.clientX / canvasWidth,
        parallaxY: event.clientY / canvasHeight,
      });
    },
    [api, canvasHeight, canvasWidth]
  );

  // Callback appelé lors du scroll
  const scrollHandler = useCallback(() => {
    // On récupère ici la hauteur de la page
    const windowHeight = Math.max(
      document.body.getBoundingClientRect().height,
      document.documentElement.getBoundingClientRect().height
    );

    // Pourcentage de la page scrollée
    const scrollPercent = window.scrollY / (windowHeight - window.innerHeight);

    // On actualise la position des étoiles selon l'axe Y
    api.start({
      posY: scrollPercent,
    });
  }, [api]);

  // Effet de bord permettant de s'abonner aux événements liés à la souris
  useEffect(() => {
    window.addEventListener('pointermove', pointerMoveHandler); // Mouvements de la souris
    window.addEventListener('scroll', scrollHandler); // Scroll

    return () => {
      // Désabonnements
      window.removeEventListener('pointermove', pointerMoveHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [pointerMoveHandler, scrollHandler]);

  return (
    <animated.group
      position={to(
        [
          springs.parallaxX.to([0, 1], [PARALLAX_X, -PARALLAX_X]),
          springs.parallaxY.to([0, 1], [-PARALLAX_Y, PARALLAX_Y]),
          springs.posY.to([0, 1], [0, MAX_Y]),
        ],
        (pX, pY, y) => [pX, y + pY, 0]
      )}
    >
      <Points positions={starsPositions}>
        <PointMaterial color='#fff' size={STARS_SIZE} sizeAttenuation={true} />
      </Points>
    </animated.group>
  );
}
