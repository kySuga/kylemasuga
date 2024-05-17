import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

// const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Masuga | kylemasuga.com",
  description:
    "Kyle Masuga is passionate about Mother Nature and being active outdoors. His day job is as a frontend web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
