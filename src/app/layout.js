import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/navbar";
import Footbar from "@/components/footbar";
import "./globals.css";


export const metadata = {
  title: "LaMaisonVerte",
  description: "LaMaisonVerte - Refugiul tău în natură.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/egg.svg" type="image/svg+xml" />
      </head>
      <body
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
