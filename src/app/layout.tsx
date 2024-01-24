import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meb Port",
  description: "sdk-meb, about, general, portfolio, terminal, iterm, termix",
  icons: {
    icon: [
      {
        pathname: "/",
        url: "/portfolio.ico",
        href: "/portfolio.ico",
      },
      {
        pathname: "/portfolio",
        url: "/portfolio.ico",
        href: "/portfolio.ico",
      },
    ],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={inter.className + "min-w-sscreen min-h-screen bg-gray-900"}
      >
        <main className={"w-full h-full"}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
