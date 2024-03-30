import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./styles/globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--point-text",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--basic-text",
});

export const metadata: Metadata = {
  title: "Sona next books",
  description: "Booklist by Sona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${nunitoSans.variable}`}
    >
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
