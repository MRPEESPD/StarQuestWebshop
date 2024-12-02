import { Kanit } from 'next/font/google'
const kanit = Kanit({ weight: '400', subsets: ['latin'] })
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './utils/AuthProvider.jsx';
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: 'StarQuest',
  description: 'StarQuest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <AuthProvider>
        <NextTopLoader color="#4a7c2a" />
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
