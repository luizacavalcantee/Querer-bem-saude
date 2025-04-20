import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Querer Bem Saúde",
  description: "Querer Bem Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
