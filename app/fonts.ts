/**
 * Ce fichier permet d'importer les polices utilisées dans le site,
 * et les exporte dans toute l'application.
 */

import { Alegreya, Poppins } from 'next/font/google';

export const alegreya = Alegreya({ subsets: ['latin'] });
export const poppins = Poppins({ weight: '300', subsets: ['latin'] });
