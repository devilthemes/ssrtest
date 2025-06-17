import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.scss";
import Script from "next/script";
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
export const metadata: Metadata = {
  title: "ChangeIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body className={`${inter.variable}`}>
     
        {children}
   
      </body>
    </html>
  );
}
