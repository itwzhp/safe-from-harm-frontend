import localFont from 'next/font/local';
import Image from 'next/image';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import clsx from 'clsx';

const inter = Inter({ subsets: ["latin"] });
const museo = localFont({
  src: '../public/fonts/Museo300-Regular.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Safe from Harm | Zakładanie kont",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={clsx(museo.className, inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content flex flex-col md:flex-row md:px-24 gap-3 items-center text-center">
      <Link href="/">
        <Image
          src="/identifier-zhp-white.png"
          height={60}
          width={155}
          alt="Związek Harcerstwa Polskiego"
        />
      </Link>

      <Link href="/" className="text-xl font-medium">
        Safe from Harm
      </Link>

      <div className="font-light flex flex-1 justify-end">
        Zalogowano jako: Bartłomiej Mroziński (bartlomiej.mrozinski@zhp.net.pl)
      </div>
    </div>
  );
}