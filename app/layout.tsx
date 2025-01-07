import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
      <body className={`${poppins.className} antialiased mx-[6%] lg:mx-[12%]`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
      </StoreProvider>
    </html>
  );
}
