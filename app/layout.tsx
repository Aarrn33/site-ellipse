import '../styles/globals.scss';

import { Alegreya, Poppins } from '@next/font/google';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';

// On exporte les polices utilisées par le site
export const alegreya = Alegreya();
export const poppins = Poppins({ weight: '300' });

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
