import type { Metadata } from "next";
import { Kiwi_Maru } from "next/font/google";
import "./globals.css";

const  kiwiMaru  = Kiwi_Maru({
  variable: "--font-kiwi-maru",
  subsets: ["latin"], 
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "sora-portfolio",
  description: "sawanosoraのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${kiwiMaru.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
