import '../styles/globals.scss';

import { Metadata } from 'next';
import { Alegreya, Poppins } from 'next/font/google';

import Background from '../components/background/background';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

// Polices utilisées par le site
const alegreya = Alegreya({ subsets: ['latin'] });
const poppins = Poppins({ weight: '300', subsets: ['latin'] });

// Métadonnées du site (figureront finalement dans la balise <head>)
const metadata: Metadata = {
  title: 'La prépa Ellipse',
};

export { alegreya, metadata, poppins };

// Layout global de l'application (encapsule chaque page dans le header et le footer)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body>
        <Header />
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
