import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Makkas Hairdresser & Cosmetics - Ihr Friseur in der Schwanthalerstraße 40, 80336 München',
  description: 'Professionelle Friseurdienstleistungen im Herzen von München. Haarschnitt, Färben, Styling und mehr. Vereinbaren Sie jetzt Ihren Termin!',
  openGraph: {
    title: 'Makkas Hairdresser & Cosmetics - Ihr Friseur in der Schwanthalerstraße 40, 80336 München',
    description: 'Professionelle Friseurdienstleistungen im Herzen von München. Haarschnitt, Färben, Styling und mehr.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
