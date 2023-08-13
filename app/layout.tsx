import '../styles/globals.scss';

import { Metadata } from 'next';

import Background from '../components/background/background';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import ImageDisplayer from '../components/imageDisplayer/imageDisplayer';
import AppProvider from './appProvider';
import { poppins } from './fonts';

// Métadonnées du site (figureront finalement dans la balise <head>)
const metadata: Metadata = {
  title: 'La prépa Ellipse',
};

export { metadata };

// Layout global de l'application (encapsule chaque page dans le header et le footer)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr' className={poppins.className}>
      <body>
        <AppProvider>
          <Header />
          <Background />
          <ImageDisplayer />
          {children}
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}
