
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from './providers'
import {Toaster} from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Healtether Task2",
  description: "developed by Mohammad Noor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
           <Toaster position="top-right" />
            {children}</Providers>
       
      </body>
       
    </html>
  );
}
