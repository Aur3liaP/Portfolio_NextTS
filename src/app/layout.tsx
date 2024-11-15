import type { Metadata } from "next";
import "./globals.css";
// import { montserratAlternates } from '@/app/ui/font';
// import { glassAntiqua } from '@/app/ui/font';

export const metadata: Metadata = {
  title: "Aurélia PIC",
  description: "Aurélia's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        // className={`${glassAntiqua.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

