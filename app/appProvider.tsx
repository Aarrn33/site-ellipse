/**
 * Ce composant client permet "d'émettre" le contexte
 * associé à l'état de l'application ; cela comprend :
 * l'image à afficher dans le composant <ImageDisplayer>,
 * la page sur laquelle se trouve actuellement l'utilisateur.
 */

'use client';

import { StaticImageData } from 'next/image';
import { createContext, useContext, useReducer } from 'react';

// Type décrivant l'état de l'application
export type AppState = {
  imageDisplayer: {
    image: StaticImageData;
    alt: string;
    caption?: string;
    shouldDisplay: boolean;
  };
};

// État initial de l'application
const initialState: AppState = {
  imageDisplayer: {
    image: {
      src: '',
      height: 0,
      width: 0,
    },
    alt: '',
    caption: '',
    shouldDisplay: false,
  },
};

// Créateurs d'actions
enum ActionTypes {
  DisplayImage = 'DISPLAY_IMAGE',
  HideImage = 'HIDE_IMAGE',
}

export const displayImage = (
  image: StaticImageData,
  alt: string,
  caption?: string
) => ({
  type: ActionTypes.DisplayImage,
  image,
  alt,
  caption,
});

export const hideImage = () => ({
  type: ActionTypes.HideImage,
});

// Reducer de l'application
function AppReducer(
  state: AppState,
  action: { type: ActionTypes; [key: string]: any }
): AppState {
  switch (action.type) {
    case ActionTypes.DisplayImage:
      return {
        imageDisplayer: {
          image: action.image,
          alt: action.alt,
          caption: action.caption,
          shouldDisplay: true,
        },
      };

    case ActionTypes.HideImage:
      return initialState;
  }
}

// Création des contextes associés au state et à la fonction dispatch
const AppContext = createContext<AppState>(initialState);
const AppDispatchContext = createContext<React.Dispatch<any>>(() => null);

// Petits hook utilitaires pour utiliser les contextes
export function useAppState() {
  return useContext(AppContext);
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // On utilise ici le système de reducer de React
  const [appState, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={appState}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}
