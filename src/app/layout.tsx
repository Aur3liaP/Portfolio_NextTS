import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}

