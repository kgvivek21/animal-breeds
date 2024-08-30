import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dogs Breed",
  description: "List of Dog breed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} bg-accent`}>
        <div className="flex bg-primary justify-center items-center p-3">
          <Link
            href={"/"}
            className="flex text-xl font-extrabold justify-center text-white"
          >
            List of Dog Breeds
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
