import type { Metadata } from "next";
import "../styles/globals.css";
import Script from "next/script";
import { Kurale } from "next/font/google";

const kurale = Kurale({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "The Queen",
  description: "Code by João Guilherme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          type="module"
          strategy="beforeInteractive" // Carrega antes da renderização
        />
      </head>
      <body className={kurale.className}>
        {children}
      </body>
    </html>
  );
}
