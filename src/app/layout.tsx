// src/app/layout.tsx
import './globals.css';
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component'

export const metadata = {
  title: 'Componente de saudação',
  description: 'Um exemplo de aplicação Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
