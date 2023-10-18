import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";

import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";

import ThemeContextProvider from "./context/theme-context";
import Providers from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farhan Nazir",
  description: "Farhan Nazir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className}  bg-yellow-200 dark:bg-slate-900 text-black dark:text-white scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded-sm min-h-screen`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
